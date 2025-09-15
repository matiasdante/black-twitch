const { app, BrowserWindow, shell, session, ipcMain } = require('electron');
const path = require('path');

// Permitir autoplay sin gesto del usuario (útil para streams)
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

// Usar aceleración por hardware (mejor para video); si hubiera glitches, se puede desactivar.
// app.disableHardwareAcceleration();

// Asegurar carpeta de datos de usuario con permisos
try {
  const fs = require('fs');
  const userDataDir = path.join(app.getPath('appData'), 'twitch-desktop');
  fs.mkdirSync(userDataDir, { recursive: true });
  app.setPath('userData', userDataDir);
  const diskCacheDir = path.join(userDataDir, 'Cache');
  fs.mkdirSync(diskCacheDir, { recursive: true });
  app.commandLine.appendSwitch('disk-cache-dir', diskCacheDir);
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
  const candidates = [
    path.join(__dirname, '..', 'resources', 'twitch-black.ico'),
    path.join(__dirname, '..', 'resources', 'twitch-black.ico.ico'),
    path.join(__dirname, '..', 'resources', 'twitch-black.png'),
  ];
  try {
    const fs = require('fs');
    for (const p of candidates) {
      if (fs.existsSync(p)) return p;
    }
  } catch {}
  return undefined;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#000000',
    autoHideMenuBar: true,
    frame: false, // ventana sin marco para dibujar controles personalizados
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'hidden',
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
  const css = `
    :root {
      /* Variables comunes de Twitch hacia negro/grises */
      --color-brand: #000000 !important;
      --color-accent: #000000 !important;
      --color-brand-accent: #000000 !important;
      --color-background-button-primary-default: #000000 !important;
      --color-text-link: #bbbbbb !important;
      --color-text-interactable: #bbbbbb !important;
      --color-text-link-hover: #e0e0e0 !important;
      --color-background-button-primary-hover: #1a1a1a !important;
      --color-border-brand: #2a2a2a !important;
      /* Paleta púrpura de Twitch a negro */
      --color-twitch-purple: #000000 !important;
      --color-twitch-purple-1: #000000 !important;
      --color-twitch-purple-2: #000000 !important;
      --color-twitch-purple-3: #000000 !important;
      --color-twitch-purple-4: #000000 !important;
      --color-twitch-purple-5: #000000 !important;
      --color-twitch-purple-6: #000000 !important;
      --color-twitch-purple-7: #000000 !important;
      --color-twitch-purple-8: #000000 !important;
      --color-twitch-purple-9: #000000 !important;
      --color-twitch-purple-10: #000000 !important;
    }
    a, .link, [class*="link"] { color: #bbbbbb !important; }

    /* Gradiente negro→gris claro para elementos solicitados */
    .Layout-sc-1xcs6mc-0.jmERFg.stream-chat-header,
    .Layout-sc-1xcs6mc-0.kbXNWp {
      background-image: linear-gradient(180deg, #000000 0%, #1a1a1a 60%, #2a2a2a 100%) !important;
      background-color: #000000 !important;
      border-color: #2a2a2a !important;
    }

    /* Texto en blanco dentro del contenedor kbXNWp */
    .Layout-sc-1xcs6mc-0.kbXNWp,
    .Layout-sc-1xcs6mc-0.kbXNWp * {
      color: #ffffff !important;
      --color-text-base: #ffffff !important;
      --color-text-interactable: #ffffff !important;
    }

    /* Gradiente y texto blanco para highlight colapsado solicitado */
    .Layout-sc-1xcs6mc-0.eUumjH.highlight.highlight__collapsed {
      background-image: linear-gradient(180deg, #000000 0%, #1a1a1a 60%, #2a2a2a 100%) !important;
      background-color: #000000 !important;
      border-color: #2a2a2a !important;
      color: #ffffff !important;
    }
    .Layout-sc-1xcs6mc-0.eUumjH.highlight.highlight__collapsed * {
      color: #ffffff !important;
    }

    /* ----- Barra superior personalizada (ventana sin marco) ----- */
    html::before {
      content: '';
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 32px;
      background: #0a0a0a;
      -webkit-app-region: drag; /* permite arrastrar la ventana */
      z-index: 999999;
    }

    /* Contenedor de botones */
    .twx-window-controls {
      position: fixed;
      top: 6px; right: 10px;
      display: flex; gap: 10px;
      z-index: 1000000;
      -webkit-app-region: no-drag; /* los botones deben ser clicables */
    }
    .twx-btn {
      width: 14px; height: 14px;
      border-radius: 50%;
      border: 1px solid #2a2a2a;
      background: #151515;
      display: inline-block;
      cursor: pointer;
    }
    .twx-btn:hover { filter: brightness(1.2); }
    .twx-btn:active { filter: brightness(0.9); }
    .twx-btn.min { background: #6b6b6b; }
    .twx-btn.max { background: #bfbfbf; }
    .twx-btn.close { background: #e05252; }

    /* Evitar solape con contenido superior de Twitch */
    body { padding-top: 32px !important; }
  `;


  win.webContents.on('did-finish-load', async () => {
    try { cssKey = await win.webContents.insertCSS(css); } catch {}
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

app.whenReady().then(() => {
  // AppUserModelID para que Windows use el icono en la barra de tareas
  if (process.platform === 'win32') {
    app.setAppUserModelId('com.matiasdante.twitch-desktop');
  }
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
