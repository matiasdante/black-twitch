# Twitch Desktop

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

