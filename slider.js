/* ============================================
   OCS — Before / After Comparison Slider
   Supports: mouse drag, touch, keyboard
   ============================================ */
(function () {
  'use strict';

  function initSliders() {
    document.querySelectorAll('.comparison-slider').forEach(initSlider);
  }

  function initSlider(wrap) {
    const afterEl  = wrap.querySelector('.cs-after');
    const divider  = wrap.querySelector('.cs-divider');
    const handle   = wrap.querySelector('.cs-handle');
    let dragging   = false;
    let pct        = 50;

    function setPosition(x) {
      const rect = wrap.getBoundingClientRect();
      let p = ((x - rect.left) / rect.width) * 100;
      p = Math.max(2, Math.min(98, p));
      pct = p;
      afterEl.style.clipPath  = `inset(0 ${100 - p}% 0 0)`;
      divider.style.left      = p + '%';
      handle.style.left       = p + '%';
    }

    /* Mouse */
    wrap.addEventListener('mousedown', e => {
      dragging = true;
      setPosition(e.clientX);
      e.preventDefault();
    });
    window.addEventListener('mousemove', e => {
      if (!dragging) return;
      setPosition(e.clientX);
    });
    window.addEventListener('mouseup', () => { dragging = false; });

    /* Touch */
    wrap.addEventListener('touchstart', e => {
      dragging = true;
      setPosition(e.touches[0].clientX);
      if (e.cancelable) e.preventDefault();
    }, { passive: false });
    wrap.addEventListener('touchmove', e => {
      if (!dragging) return;
      setPosition(e.touches[0].clientX);
      if (e.cancelable) e.preventDefault();
    }, { passive: false });
    wrap.addEventListener('touchend', () => { dragging = false; });

    /* Keyboard */
    wrap.setAttribute('tabindex', '0');
    wrap.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  { pct = Math.max(2,  pct - 2); }
      if (e.key === 'ArrowRight') { pct = Math.min(98, pct + 2); }
      afterEl.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      divider.style.left = pct + '%';
      handle.style.left  = pct + '%';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSliders);
  } else {
    initSliders();
  }
})();
