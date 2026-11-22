/* Portfolio / Build log. No dependencies.
   1. Homepage slideshow   2. Project tag filter   3. Reduced-motion video
   Everything here is an enhancement: with JavaScript off, all slides and all
   project cards are simply shown. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Slideshow ---------------------------------------------------------- */
  document.querySelectorAll('[data-slideshow]').forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-slide]'));
    var controls = root.querySelector('[data-controls]');
    if (slides.length < 2 || !controls) { return; }

    var dots = Array.prototype.slice.call(controls.querySelectorAll('[data-dot]'));
    var current = 0;
    var timer = null;
    var delay = parseInt(root.getAttribute('data-autoplay'), 10) || 0;

    function show(index, keepFocus) {
      current = (index + slides.length) % slides.length;
      var focused = keepFocus && controls.contains(document.activeElement) ? document.activeElement : null;
      slides.forEach(function (slide, i) { slide.hidden = i !== current; });
      dots.forEach(function (dot, i) {
        if (i === current) { dot.setAttribute('aria-current', 'true'); } else { dot.removeAttribute('aria-current'); }
      });
      /* The one set of controls sits inside the visible slide, under its image. */
      var slot = slides[current].querySelector('[data-controls-slot]');
      if (slot) { slot.appendChild(controls); }
      if (focused) { focused.focus(); }
      /* Only the visible slide's video plays. */
      slides.forEach(function (slide, i) {
        slide.querySelectorAll('video').forEach(function (video) {
          if (i === current && !reduceMotion) { var p = video.play(); if (p && p.catch) { p.catch(function () {}); } }
          else { video.pause(); }
        });
      });
    }

    /* Once the visitor picks a slide themselves (arrow, bar or arrow key),
       auto-advance stays off until the page is reloaded. */
    var userStopped = false;
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function start() {
      stop();
      if (!userStopped && delay >= 5000 && !reduceMotion) { timer = setInterval(function () { show(current + 1, false); }, delay); }
    }
    function choose(index) { userStopped = true; stop(); show(index, true); }

    controls.querySelector('[data-prev]').addEventListener('click', function () { choose(current - 1); });
    controls.querySelector('[data-next]').addEventListener('click', function () { choose(current + 1); });
    dots.forEach(function (dot, i) { dot.addEventListener('click', function () { choose(i); }); });
    root.addEventListener('keydown', function (event) {
      if (!controls.contains(event.target)) { return; }
      if (event.key === 'ArrowLeft') { choose(current - 1); }
      if (event.key === 'ArrowRight') { choose(current + 1); }
    });
    /* Auto-advance also pauses while the visitor is pointing at or tabbing through it. */
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    controls.hidden = false;
    show(0, false);
    start();
  });

  /* 2. Tag filter --------------------------------------------------------- */
  document.querySelectorAll('[data-filters]').forEach(function (bar) {
    var chips = Array.prototype.slice.call(bar.querySelectorAll('[data-filter]'));
    var scope = bar.parentNode;
    var cards = Array.prototype.slice.call(scope.querySelectorAll('[data-tags]'));
    if (chips.length < 3) { return; } /* "All" plus one tag is not worth a filter */

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var want = chip.getAttribute('data-filter');
        chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
        cards.forEach(function (card) {
          card.hidden = want !== 'all' && (' ' + card.getAttribute('data-tags') + ' ').indexOf(' ' + want + ' ') < 0;
        });
      });
    });
    bar.hidden = false;
  });

  /* 3. Reduced motion: looping videos wait for the visitor to press play --- */
  if (reduceMotion) {
    document.querySelectorAll('video[autoplay]').forEach(function (video) {
      video.removeAttribute('autoplay');
      video.pause();
      video.controls = true;
    });
  }
})();
