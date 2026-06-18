'use strict';
// BAND LEGACY — FASE 2 MOBILE LANDSCAPE/FULLSCREEN CONTROLLER
// Build: v0.2.1_20260522_1506
(function () {
  const BUILD = 'v0.2.1_20260522_1506';
  const doc = document;
  const root = doc.documentElement;
  const body = doc.body;
  const mobileUA = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(navigator.userAgent);
  const isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
  const canFS = Boolean(root.requestFullscreen || root.webkitRequestFullscreen || root.msRequestFullscreen);
  const canLock = Boolean(screen.orientation && screen.orientation.lock);

  function setVH() {
    root.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }
  function isMobileLike() {
    return mobileUA || isTouch || Math.min(window.innerWidth, window.innerHeight) <= 540;
  }
  function isPortrait() {
    return window.innerHeight > window.innerWidth;
  }
  function updateCapabilityText() {
    const el = doc.getElementById('mobileCapabilityText');
    if (!el) return;
    const fs = canFS ? 'fullscreen disponivel' : 'fullscreen limitado pelo navegador';
    const lock = canLock ? 'bloqueio horizontal disponivel' : 'bloqueio horizontal limitado';
    el.textContent = `${fs} • ${lock} • build ${BUILD}`;
  }
  async function requestLandscapeFullscreen() {
    try {
      if (!document.fullscreenElement && canFS) {
        const fn = root.requestFullscreen || root.webkitRequestFullscreen || root.msRequestFullscreen;
        await fn.call(root);
      }
    } catch (err) {
      console.warn('[BandLegacy Mobile] Fullscreen denied/limited:', err && err.message ? err.message : err);
    }
    try {
      if (canLock) await screen.orientation.lock('landscape');
    } catch (err) {
      console.warn('[BandLegacy Mobile] Orientation lock denied/limited:', err && err.message ? err.message : err);
    }
    updateState();
  }
  function updateState() {
    setVH();
    const mobile = isMobileLike();
    body.classList.toggle('is-mobile-device', mobile);
    body.classList.toggle('is-portrait', mobile && isPortrait());
    body.classList.toggle('is-landscape', !isPortrait());
    body.classList.toggle('is-fullscreen', Boolean(document.fullscreenElement));
    body.classList.toggle('mobile-landscape-ready', mobile && !isPortrait());
    updateCapabilityText();
    let badge = doc.querySelector('.mobile-debug-badge');
    if (!badge) {
      badge = doc.createElement('div');
      badge.className = 'mobile-debug-badge';
      doc.body.appendChild(badge);
    }
    badge.textContent = `${BUILD} • ${window.innerWidth}x${window.innerHeight} • ${document.fullscreenElement ? 'FS' : 'NO-FS'}`;
  }
  ['resize','orientationchange','fullscreenchange','webkitfullscreenchange','visibilitychange'].forEach(evt => {
    window.addEventListener(evt, () => setTimeout(updateState, evt === 'orientationchange' ? 250 : 40), { passive:true });
  });
  doc.addEventListener('click', (event) => {
    const target = event.target.closest('#tryFullscreenBtn,[data-action="fullscreen"],#installHintBtn');
    if (target) requestLandscapeFullscreen();
  });
  doc.addEventListener('touchmove', (event) => {
    if (event.touches.length > 1) event.preventDefault();
  }, { passive:false });
  doc.addEventListener('gesturestart', (event) => event.preventDefault());
  doc.addEventListener('DOMContentLoaded', updateState);
  updateState();
  window.BandLegacyMobile = { updateState, requestLandscapeFullscreen, build: BUILD };
})();
