const { app, BrowserWindow, shell, session, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

// Permitir autoplay sin gesto del usuario (útil para streams)
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

// Usar aceleración por hardware (mejor para video); si hubiera glitches, se puede desactivar.
// app.disableHardwareAcceleration();

// Asegurar carpeta de datos de usuario con permisos
try {
  const userDataDir = path.join(app.getPath('appData'), 'twitch-desktop');
  fs.mkdirSync(userDataDir, { recursive: true });
  app.setPath('userData', userDataDir);
  // Se evita forzar 'disk-cache-dir' para prevenir errores de permisos en Windows
} catch {}

// Asegura una sola instancia
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', (_event, _argv, _cwd) => {
    const win = BrowserWindow.getAllWindows()[0];
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });
}

/**
 * Crea la ventana principal
 */
function resolveAppIcon() {
  // Prioriza el .ico, luego PNG
  const ico = path.join(__dirname, '..', 'resources', 'twitch-black.ico');
  const png = path.join(__dirname, '..', 'resources', 'twitch-black.png');
  try {
    const fs = require('fs');
    if (fs.existsSync(ico)) return ico;
    if (fs.existsSync(png)) return png;
  } catch {}
  return undefined;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#000000',
    autoHideMenuBar: true,
    frame: true, // Usar barra de título y controles nativos de Windows
    icon: resolveAppIcon(),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      // Desactivar sandbox para permitir preload con require
      sandbox: false,
      autoplayPolicy: 'no-user-gesture-required',
    },
  });

  // Permitir pantalla completa real
  win.setFullScreenable(true);

  // Ocultar barra personalizada al entrar en pantalla completa
  win.on('enter-full-screen', () => {
    win.webContents.send('window:fullscreen-changed', true);
  });
  win.on('leave-full-screen', () => {
    win.webContents.send('window:fullscreen-changed', false);
  });

  // Clave del CSS inyectado (por si en un futuro queremos retirarlo)
  let cssKey = null;

  // Helper de validación de dominios Twitch
  const isAllowedTwitchUrl = (url) => {
    return /^(https?:\/\/)?([a-z0-9-]+\.)*twitch\.tv(\/|$)/i.test(url)
      || /^(https?:\/\/)?([a-z0-9-]+\.)*ttvnw\.net(\/|$)/i.test(url);
  };

  // Maneja target=_blank: Twitch dentro de la app, externos en el navegador
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (isAllowedTwitchUrl(url)) {
      // Carga en la misma ventana en vez de crear una nueva
      win.loadURL(url);
      return { action: 'deny' };
    }
    shell.openExternal(url);
    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (event, url) => {
    // Permite solo dominios de Twitch; cualquier otro se abre externamente
    if (!isAllowedTwitchUrl(url)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  // Permitir autoplay para Twitch (clips/streams)
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'media') {
      // No conceder mic/cam automáticamente
      return callback(false);
    }
    callback(false);
  });

  // Mejoras de desempeño en Windows
  if (process.platform === 'win32') {
    app.commandLine.appendSwitch('disable-features', 'CalculateNativeWinOcclusion');
  }

  // User-Agent tipo Chrome para evitar bloqueos por UA de Electron
  const chromeUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36';
  win.webContents.setUserAgent(chromeUA);

  // Cargar Twitch
  const twitchUrl = 'https://www.twitch.tv/';
  win.loadURL(twitchUrl);

  // Inyectar CSS para forzar paleta negro/grises
  const cssPath = path.join(__dirname, 'styles.css');
  const css = fs.readFileSync(cssPath, 'utf8');


  win.webContents.on('did-finish-load', async () => {
    try { cssKey = await win.webContents.insertCSS(css); } catch {}
    // Aplicar extensiones configuradas (userscripts/CSS) tras cargar la página
    try { await applyConfiguredExtensions(win); } catch {}
  });

  // Al navegar dentro de Twitch, re-aplicar por si cambia el host/path
  win.webContents.on('did-navigate-in-page', async () => {
    try { await applyConfiguredExtensions(win); } catch {}
  });

  // IPC: controles de ventana
  ipcMain.handle('window:minimize', () => {
    if (!win.isDestroyed()) win.minimize();
  });
  ipcMain.handle('window:maximizeOrRestore', () => {
    if (win.isDestroyed()) return;
    if (win.isMaximized()) win.unmaximize(); else win.maximize();
  });
  ipcMain.handle('window:close', () => {
    if (!win.isDestroyed()) win.close();
  });

  const sendMaxState = () => {
    if (!win.isDestroyed()) win.webContents.send('window:maximize-changed', win.isMaximized());
  };
  win.on('maximize', sendMaxState);
  win.on('unmaximize', sendMaxState);

  // win.webContents.openDevTools({ mode: 'detach' });
}

// --------- Soporte de "extensiones" ---------
function readExtensionsConfig() {
  let configPath;

  // Check if we're in development mode by checking if we're inside an ASAR
  const isDevelopment = !__dirname.includes('.asar');

  if (isDevelopment) {
    // Development mode - use project root path
    configPath = path.join(__dirname, '..', 'resources', 'extensions.json');
  } else {
    // Production mode (built app)
    configPath = path.join(process.resourcesPath, 'app.asar.unpacked', 'resources', 'extensions.json');
  }

  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    const json = JSON.parse(raw);
    if (Array.isArray(json.extensions)) return json.extensions;
  } catch (e) {
    console.error(`[extensions] Error reading config from ${configPath}:`, e);
  }
  return [];
}

async function loadChromeExtensionsFromConfig() {
  const items = readExtensionsConfig();
  const chromeExts = items.filter(e => e && e.enabled && e.type === 'chrome' && typeof e.extensionPath === 'string');
  for (const ext of chromeExts) {
    try {
      let resolvedPath;
      // Check if we're in development mode by checking if we're inside an ASAR
      const isDevelopment = !__dirname.includes('.asar') && fs.existsSync(path.join(__dirname, '..', 'extensions'));

      if (isDevelopment) {
        // Development mode - use project root path
        const baseDir = path.join(__dirname, '..');
        resolvedPath = path.isAbsolute(ext.extensionPath)
          ? ext.extensionPath
          : path.join(baseDir, ext.extensionPath);
      } else {
        // Production mode (built app)
        resolvedPath = path.isAbsolute(ext.extensionPath)
          ? ext.extensionPath
          : path.join(process.resourcesPath, 'app.asar.unpacked', ext.extensionPath);
      }

      console.log(`[extensions] Is development: ${isDevelopment}`);
      console.log(`[extensions] __dirname: ${__dirname}`);
      console.log(`[extensions] Checking path: ${resolvedPath}`);
      console.log(`[extensions] Path exists: ${fs.existsSync(resolvedPath)}`);

      if (fs.existsSync(resolvedPath)) {
        const info = await session.defaultSession.loadExtension(resolvedPath, { allowFileAccess: true });
        if (info && info.name) {
          console.log(`[extensions] ✅ Cargada extensión: ${info.name} (${info.id}) desde ${resolvedPath}`);
        } else {
          console.log(`[extensions] ✅ Cargada extensión desde ${resolvedPath}`);
        }
      } else {
        console.warn(`[extensions] ❌ Ruta de extensión no existe: ${resolvedPath}`);
      }
      // eslint-disable-next-line no-empty
    } catch (e) {
      console.error(`[extensions] ❌ Error cargando extensión:`, e);
    }
  }
}

// IPC para que el preload conozca userscripts/css habilitados
ipcMain.handle('extensions:get-config', () => {
  const items = readExtensionsConfig();
  const allowed = items.filter(e => e && e.enabled && (e.type === 'userscript' || e.type === 'css'));
  return allowed;
});

function toPatternRegex(pattern) {
  if (!pattern || typeof pattern !== 'string') return /.*/;
  // Muy simple: escapa regex y reemplaza '*' por '.*'
  const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
  const regexStr = '^' + escaped.replace(/\*/g, '.*') + '$';
  try { return new RegExp(regexStr, 'i'); } catch { return /.*/; }
}

async function fetchText(url) {
  return await new Promise((resolve, reject) => {
    try {
      const isHttps = /^https:/i.test(url);
      const mod = isHttps ? require('https') : require('http');
      const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 Electron' } }, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          // seguir redirección simple
          return resolve(fetchText(res.headers.location));
        }
        if (res.statusCode && res.statusCode >= 400) {
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        let data = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve(data));
      });
      req.on('error', reject);
    } catch (e) { reject(e); }
  });
}

async function applyConfiguredExtensions(win) {
  const items = readExtensionsConfig();
  if (!Array.isArray(items) || items.length === 0) return;
  const currentUrl = win.webContents.getURL();
  for (const item of items) {
    if (!item || !item.enabled) continue;
    const rx = toPatternRegex(item.match || '*://*.twitch.tv/*');
    if (!rx.test(currentUrl)) continue;
    try {
      if (item.type === 'css' && typeof item.css === 'string') {
        await win.webContents.insertCSS(item.css);
      } else if (item.type === 'userscript' && typeof item.scriptUrl === 'string') {
        const code = await fetchText(item.scriptUrl);
        if (code && code.length > 0) {
          await win.webContents.executeJavaScript(code, true);
        }
      }
    } catch {}
  }
}

app.whenReady().then(async () => {
  // AppUserModelID para que Windows use el icono en la barra de tareas
  if (process.platform === 'win32') {
    app.setAppUserModelId('com.matiasdante.twitch-desktop');
  }
  // Cargar extensiones de Chrome descomprimidas si se configuraron
  try { await loadChromeExtensionsFromConfig(); } catch {}
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
