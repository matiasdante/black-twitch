<!-- markdownlint-disable MD033 -->

<h1 align="center">
  <br>
  <a href="https://github.com/matiasdante"><img src="resources/twitch-black.png" alt="Black Twitch" width="200"></a>
  <br>
  Black Twitch (Electron)
  <br>
</h1>

<h4 align="center">Mira Twitch en una app de escritorio ligera (sin navegador)</h4>

<p align="center">
  <a href="#funciones">Funciones</a> •
  <a href="#descarga">Descarga</a> •
  <a href="#como-usarla">Cómo usarla</a> •
  <a href="#creditos">Créditos</a>
</p>

<a id="funciones"></a>

## Funciones

Con esta app podrás...

- Abrir `https://www.twitch.tv/` en una ventana mínima de Electron (menú oculto, 1200x800 por defecto).
- Reproducir video automáticamente para streams/clips.
- Abrir enlaces externos en tu navegador por defecto.
- Forzar un tema negro/grises (sin morados) con CSS inyectado y un preload seguro.
- Cargar integraciones opcionales: 7TV (incluida), userscripts y CSS desde `resources/extensions.json`.
- Mantener buenas prácticas de seguridad: `contextIsolation` activado, `nodeIntegration` desactivado.

<a id="descarga"></a>

## Descarga

Requisitos: Node.js 18+

Clona este repositorio:

```pwsh
git clone https://github.com/matiasdante/twitch-desktop.git
```

<a id="como-usarla"></a>

## Como usarla

1) Entra a la carpeta del proyecto

```pwsh
cd black-twitch
```

1) Instala las dependencias

```pwsh
npm install
```

1) Inicia la app (compatible con PowerShell)

```pwsh
npm start
```

Opcional: generar un directorio portable para Windows

```pwsh
npm run build:win
```

Notas

- Icono (Windows): coloca `resources/twitch-black.ico` (recomendado 256×256, 32‑bit RGBA) o `resources/twitch-black.png`. Si no existe, se usa el icono por defecto de Electron.
- Tema: si algo se ve extraño, puedes desactivar la inyección de CSS en `src/main.js` o ajustar la lógica en `src/preload.js`.
- DevTools: habilítalos temporalmente en `src/main.js` si necesitas depurar.

<a id="creditos"></a>

## Créditos

- Construida con Electron.
- Los assets/extensiones de 7TV pertenecen a sus respectivos dueños; úsalos bajo sus términos y los TOS de Twitch/terceros.
- Autor: [matutEv](https://github.com/matiasdante)
- Licencia: MIT
