/* =========================
   High Performance Script
   ========================= */
(() => {
  'use strict';

  // Run after DOM is ready (safe with defer)
  const onReady = (fn) =>
    document.readyState !== 'loading'
      ? fn()
      : document.addEventListener('DOMContentLoaded', fn, { once: true });

  onReady(() => {
    /* =========================
       Cache DOM references
       ========================= */
    const root = document.documentElement;
    const main = document.querySelector('main');

    /* =========================
       Fast Feature Detection
       ========================= */
    const supportsReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    /* =========================
       Lightweight Fade-In
       ========================= */
    if (!supportsReducedMotion && main) {
      main.classList.add('fade-in');
    }

    /* =========================
       Passive Event Example
       ========================= */
    window.addEventListener(
      'scroll',
      () => {
        // Extremely cheap operation
        root.dataset.scrolled = window.scrollY > 10 ? '1' : '0';
      },
      { passive: true }
    );

    /* =========================
       Idle Task (Non-Critical)
       ========================= */
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        console.log('Idle task executed');
      });
    }

    /* =========================
       Performance Mark
       ========================= */
    if (window.performance?.mark) {
      performance.mark('app-interactive');
    }
  });
})();
