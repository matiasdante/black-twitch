// Preload aislado; no expone Node al DOM
const { contextBridge, ipcRenderer } = require('electron');

// API mínima por si se requiere en el futuro
contextBridge.exposeInMainWorld('twitchApp', {
  version: '0.2.0',
  onFullscreenChanged: (callback) => ipcRenderer.on('window:fullscreen-changed', (_e, isFullscreen) => callback(isFullscreen))
});

// Reemplazo de colores morados por negro/grises
(() => {
  let enabled = true; // Activado por defecto
  let observer = null;
  const PURPLES = [
    '#593999', '#a970ff', '#ba8fff', '#9147ff', '#cb5ff2',
    '#6441a5', '#772ce8', '#5c16c5', '#bf94ff', '#b19dd8', '#ab70ff',
  ];

  // Colores que también deben pasar a gradiente negro→gris claro
  const GRADIENT_COLORS = [
    '#69edc2', '#6bedc3', '#4b0234', '#440c48',
  ];

  // Colores que deben pasar a negro puro
  const BLACK_COLORS = [
    '#26262c', '#0e0e10', '#18181b',
  ];

  const normalizeHex = (hex) => hex.toLowerCase();
  const purpleSet = new Set(PURPLES.map(normalizeHex));
  const gradientSet = new Set(GRADIENT_COLORS.map(normalizeHex));
  const blackSet = new Set(BLACK_COLORS.map(normalizeHex));

  // Conversión rápida de rgb(a) a hex aproximado
  function rgbToHex(str) {
    const m = str.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    if (!m) return null;
    const r = Number(m[1]).toString(16).padStart(2, '0');
    const g = Number(m[2]).toString(16).padStart(2, '0');
    const b = Number(m[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

  const BLACK = '#000000';
  const GRAY = '#1a1a1a';
  const GRAY2 = '#2a2a2a';
  const GRADIENT = 'linear-gradient(180deg, #000000 0%, #1a1a1a 60%, #2a2a2a 100%)';

  function hexToRgb(hex) {
    const h = hex.replace('#','');
    if (h.length === 3) {
      const r = parseInt(h[0]+h[0],16), g=parseInt(h[1]+h[1],16), b=parseInt(h[2]+h[2],16);
      return {r,g,b};
    }
    if (h.length === 6) {
      const r = parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16);
      return {r,g,b};
    }
    return null;
  }

  function rgbToHsl(r,g,b) {
    r/=255; g/=255; b/=255;
    const max = Math.max(r,g,b), min = Math.min(r,g,b);
    let h, s, l = (max+min)/2;
    if (max === min) { h = s = 0; }
    else {
      const d = max - min;
      s = l > 0.5 ? d/(2 - max - min) : d/(max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h *= 60;
    }
    return {h,s,l};
  }

  function parseToHex(colorStr) {
    if (!colorStr) return null;
    const s = colorStr.trim().toLowerCase();
    if (s.startsWith('#')) {
      if (s.length === 4) {
        // #abc -> #aabbcc
        return '#' + s[1]+s[1]+s[2]+s[2]+s[3]+s[3];
      }
      if (s.length === 7) return s;
      return null;
    }
    const m = s.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (m) {
      const r = Number(m[1]), g = Number(m[2]), b = Number(m[3]);
      const hx = `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
      return hx;
    }
    return null;
  }

  function isPurple(hex) {
    if (!hex) return false;
    hex = normalizeHex(hex);
    if (purpleSet.has(hex)) return true;
    const rgb = hexToRgb(hex);
    if (!rgb) return false;
    const {h,s,l} = rgbToHsl(rgb.r, rgb.g, rgb.b);
    // Rango aproximado púrpura/magenta, saturación media y luminancia no extrema
    return (h >= 265 && h <= 315) && s >= 0.25 && l >= 0.15 && l <= 0.85;
  }

  function bgImageHasTarget(bgImg) {
    if (!bgImg || bgImg === 'none') return false;
    const hexes = bgImg.match(/#([0-9a-f]{3}|[0-9a-f]{6})/ig) || [];
    for (const hx of hexes) {
      const px = parseToHex(hx);
      if (isPurple(px) || (px && gradientSet.has(px)) || (px && blackSet.has(px))) return true;
    }
    const rgbs = bgImg.match(/rgba?\([^\)]+\)/ig) || [];
    for (const r of rgbs) {
      const px = parseToHex(r);
      if (isPurple(px) || (px && gradientSet.has(px)) || (px && blackSet.has(px))) return true;
    }
    return false;
  }

  function looksLikePill(el, cs) {
    // Heurística: border-radius, altura pequeña, clases indicativas
    const br = parseFloat((cs.getPropertyValue('border-radius') || '0').replace('px',''));
    const h = parseFloat((cs.getPropertyValue('height') || '0').replace('px',''));
    const cls = (el.className || '').toString().toLowerCase();
    const isPillClass = /pill|badge|tag|chip|banner/.test(cls);
    return isPillClass || br >= 6 || h > 0 && h <= 64;
  }

  function replaceInlineColors(el) {
  if (!enabled || !(el instanceof Element)) return;
    const style = el.getAttribute('style');
    if (!style) return;
    let newStyle = style;
    // Reemplazar hex directos
    for (const p of purpleSet) {
      const re = new RegExp(p, 'ig');
      newStyle = newStyle.replace(re, BLACK);
    }
    for (const b of blackSet) {
      const re = new RegExp(b, 'ig');
      newStyle = newStyle.replace(re, BLACK);
    }
    for (const g of gradientSet) {
      const re = new RegExp(g, 'ig');
      // En inline no podemos poner un gradient como valor de color, usamos negro
      newStyle = newStyle.replace(re, BLACK);
    }
    // Reemplazar rgb(a) aproximados si aparecen inline
    const rgbMatches = newStyle.match(/rgba?\([^\)]+\)/ig) || [];
    for (const m of rgbMatches) {
      const hx = rgbToHex(m);
      if (hx && (purpleSet.has(hx) || blackSet.has(hx) || gradientSet.has(hx))) {
        newStyle = newStyle.replace(m, BLACK);
      }
    }
    if (newStyle !== style) el.setAttribute('style', newStyle);
  }

  function isDark(hex) {
    // Luma aproximada para saltar elementos ya oscuros
    const m = hex.match(/^#([0-9a-f]{6})$/);
    if (!m) return false;
    const n = parseInt(m[1], 16);
    const r = (n >> 16) & 0xff, g = (n >> 8) & 0xff, b = n & 0xff;
    const luma = 0.2126*r + 0.7152*g + 0.0722*b; // 0..255
    return luma < 60; // muy oscuro
  }

  // Eliminamos revisión de estilos computados para evitar efectos secundarios.

  function processNode(node) {
  if (!enabled) return;
  if (node instanceof Element) {
      replaceInlineColors(node);
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
      let n = walker.nextNode();
      while (n) {
        if (!(n instanceof Element)) { n = walker.nextNode(); continue; }
        replaceInlineColors(n);
        // Revisión dirigida para pills/badges/banner
        const cs = getComputedStyle(n);
        const bg = parseToHex(cs.getPropertyValue('background-color'));
        const bgImg = cs.getPropertyValue('background-image');
        const isGradTarget = (bg && gradientSet.has(bg)) || bgImageHasTarget(bgImg);
        const isBlackTarget = bg && blackSet.has(bg);
        if (looksLikePill(n, cs) && (isPurple(bg) || isGradTarget)) {
          n.style.setProperty('background-image', GRADIENT, 'important');
          n.style.setProperty('background-color', BLACK, 'important');
          n.style.setProperty('border-color', GRAY2, 'important');
          n.style.setProperty('color', '#e5e5e5', 'important');
        } else if (looksLikePill(n, cs) && isBlackTarget) {
          n.style.setProperty('background-image', 'none', 'important');
          n.style.setProperty('background-color', BLACK, 'important');
          n.style.setProperty('border-color', GRAY2, 'important');
          n.style.setProperty('color', '#e5e5e5', 'important');
        }
        // SVG fills/strokes púrpuras dentro de pills
        if (n instanceof SVGElement) {
          const fill = parseToHex(cs.getPropertyValue('fill'));
          const stroke = parseToHex(cs.getPropertyValue('stroke'));
          if (isPurple(fill)) n.style.setProperty('fill', GRAY, 'important');
          if (isPurple(stroke)) n.style.setProperty('stroke', GRAY, 'important');
        }
        n = walker.nextNode();
      }
    }
  }

  function observe() {
    if (observer) return;
    observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.target instanceof Element && m.attributeName === 'style') {
          processNode(m.target);
        }
        if (m.type === 'childList') {
          m.addedNodes.forEach(processNode);
        }
      }
    });
    observer.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['style', 'class'] });
  }

  function initialHook() {
    if (!enabled) return;
    processNode(document.documentElement);
    observe();
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initialHook);
  } else {
    initialHook();
  }

  // Inyectar controles de ventana minimalistas
  function injectWindowControls() {
    if (document.querySelector('.twx-window-controls')) return;
    const wrap = document.createElement('div');
    wrap.className = 'twx-window-controls';
    wrap.innerHTML = `
      <div class="twx-btn min" title="Minimize"></div>
      <div class="twx-btn max" title="Maximize/Restore"></div>
      <div class="twx-btn close" title="Close"></div>
    `;
    document.body.appendChild(wrap);
    const [minBtn, maxBtn, closeBtn] = wrap.querySelectorAll('.twx-btn');
    minBtn.addEventListener('click', () => ipcRenderer.invoke('window:minimize'));
    maxBtn.addEventListener('click', () => ipcRenderer.invoke('window:maximizeOrRestore'));
    closeBtn.addEventListener('click', () => ipcRenderer.invoke('window:close'));
    ipcRenderer.on('window:maximize-changed', (_e, isMax) => {
      if (isMax) wrap.classList.add('is-max'); else wrap.classList.remove('is-max');
    });
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', injectWindowControls);
  } else {
    injectWindowControls();
  }
})();

// --- Botón Back 2 Twitch si no es twitch.tv ---
(() => {
// Lista de URLs donde debe salir el botón, aunque sea www.twitch.tv o dominios relacionados
const forceShowBtnUrls = [
  'https://www.twitch.tv/p/es-mx/about/',
  'https://twitchadvertising.tv/',
  'https://blog.twitch.tv/es-es/',
  'https://dev.twitch.tv/',
  'https://www.twitch.tv/downloads',
  'https://careers.twitch.com/',
  'https://www.igdb.com/',
  'https://www.amazon.com/twitchmerch',
  'https://www.twitch.tv/p/es-mx/partners/',
  'https://www.twitch.tv/p/press-center/',
  'https://www.twitch.tv/turbo',
  'https://help.twitch.tv/s/article/gift-card',
  'https://legal.twitch.com/legal/cookie-notice/',
  'https://legal.twitch.com/legal/privacy-notice/',
  'https://help.twitch.tv/s/',
  'https://legal.twitch.com/legal/accessibility/',
  'https://safety.twitch.tv/s/article/Community-Guidelines',
  'https://legal.twitch.com/legal/ad-choices/',
  'https://www.twitch.tv/privacy',
  'https://safety.twitch.tv/s/',
  'https://www.twitch.tv/p/es-mx/security/',
  'https://legal.twitch.com/legal/terms-of-service/',
  'https://legal.twitch.com/'
];

  function isForceShowBtnUrl() {
    const current = window.location.href.split('#')[0].split('?')[0];
    return forceShowBtnUrls.some(url => current === url);
  }

  function isTwitchDomain() {
    try {
      // Solo acepta exactamente www.twitch.tv y no está en la lista de forzados
      return window.location.hostname === 'www.twitch.tv' && !isForceShowBtnUrl();
    } catch { return false; }
  }

  function injectBack2TwitchBtn() {
    if (document.getElementById('back2twitch-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'back2twitch-btn';
    btn.textContent = 'Back 2 Twitch';
    btn.style.position = 'fixed';
    btn.style.left = '50%';
    btn.style.bottom = '24px';
    btn.style.transform = 'translateX(-50%)';
    btn.style.background = '#000';
    btn.style.color = '#fff';
    btn.style.fontSize = '18px';
    btn.style.padding = '12px 32px';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.zIndex = '99999';
    btn.style.boxShadow = '0 2px 12px #0008';
    btn.style.cursor = 'pointer';
    btn.style.opacity = '0.95';
    btn.addEventListener('click', () => {
      window.location.href = 'https://www.twitch.tv/';
    });
    document.body.appendChild(btn);
  }

  function removeBack2TwitchBtn() {
    const btn = document.getElementById('back2twitch-btn');
    if (btn) btn.remove();
  }

  function checkAndToggleBtn() {
    if (!isTwitchDomain()) {
      injectBack2TwitchBtn();
    } else {
      removeBack2TwitchBtn();
    }
  }

  window.addEventListener('DOMContentLoaded', checkAndToggleBtn);
  window.addEventListener('load', checkAndToggleBtn);
  window.addEventListener('popstate', checkAndToggleBtn);
  window.addEventListener('hashchange', checkAndToggleBtn);
  setInterval(checkAndToggleBtn, 1500); // Por si navega con JS SPA
})();

