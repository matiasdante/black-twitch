# Black Twitch

App sencilla en Electron para ver Twitch sin usar el navegador. Carga `https://www.twitch.tv/` en una ventana de escritorio (menú oculto) y abre enlaces externos en tu navegador por defecto.

## Requisitos

- Node.js 18+

## Ejecutar en Windows (PowerShell)

```pwsh
npm install
npm start
```

Esto abrirá una ventana de 1200x800 con fondo negro mostrando Twitch. Se permite el autoplay de video para streams/clips. Si haces clic en enlaces externos, se abrirán fuera de la app.

### Tema: negro y grises (sin morados)

- El tema está activo por defecto: se inyecta CSS con variables y el `preload` reemplaza colores objetivo por negro/gradiente gris.
- Limitaciones: banners/imágenes SVG con morado pueden mantener su color original; se evita romper la UI.
- Si algo se ve extraño, puedes comentar la inyección en `src/main.js` o desactivar la lógica en `src/preload.js`.

## Notas

- DevTools: descomenta `openDevTools` en `src/main.js` si necesitas depurar.
- Seguridad: `contextIsolation` activado, `nodeIntegration` desactivado y `preload` mínimo.

### Icono de la app (Windows)

- Coloca un archivo `twitch-black.ico` dentro de `resources/` (ideal: 256x256, 32-bit RGBA).
- Alternativa: `twitch-black.png` (p. ej., 512x512). Electron lo escalará.
- La app usa el icono si existe; de lo contrario, mantiene el de Electron.
- Asegúrate de tener derecho a usar el logo y cumplir con las brand guidelines de Twitch.

## Extensiones (7TV / BTTV / CSS)

Puedes activar scripts de usuario y CSS adicionales editando `resources/extensions.json`.

Tipos soportados:

- `userscript`: descarga e inyecta un script remoto tras cargar Twitch (por ejemplo 7TV/BTTV). Campos: `enabled`, `match`, `scriptUrl`.
- `css`: CSS raw a inyectar. Campos: `enabled`, `match`, `css`.
- `chrome`: carga una extensión de Chrome descomprimida en el `session` de Electron. Campos: `enabled`, `extensionPath`.

### 7TV incluido (carpeta `extensions/7tv`)

Este proyecto ya incluye la extensión 7TV (versión para navegador) en `extensions/7tv`. Para tenerla activa, asegúrate que `resources/extensions.json` contenga una entrada como:

```json
{
  "extensions": [
    {
      "name": "7TV",
      "type": "chrome",
      "enabled": true,
      "extensionPath": "extensions/7tv",
      "match": "*://*.twitch.tv/*"
    }
  ]
}
```

Notas:

- La extensión se carga al iniciar la app, antes de abrir Twitch. Verás un log en la consola: "Cargada extensión: 7TV (...)".
- En producción, la carpeta `extensions/**` se empaqueta fuera del ASAR (`asarUnpack`) para que Electron pueda leer los archivos de la extensión.
- Si algo no funciona, revisa que la ruta sea correcta y que la carpeta contenga un `manifest.json` válido.

Ejemplo 7TV (ya agregado como placeholder en `resources/extensions.json`):

```json
{
  "name": "7TV Userscript",
  "type": "userscript",
  "enabled": true,
  "match": "*://*.twitch.tv/*",
  "scriptUrl": "https://7tv.app/assets/app/public/integrations/twitch/web/7tv.twitch.global.user.js"
}
```

Notas y consideraciones:

- Los scripts se ejecutan con `executeJavaScript` después de que Twitch carga; respetan `contextIsolation`.
- La carga puede fallar si hay bloqueos de CSP del lado de Twitch; al ejecutarse desde el proceso principal, suele funcionar.
- Las extensiones Chrome requieren ruta a una carpeta descomprimida (modo desarrollador). Algunas extensiones pueden no ser compatibles con Electron.
- Usa estas integraciones bajo tu propia responsabilidad y de acuerdo a TOS de Twitch/terceros.
