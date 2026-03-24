/* ============================================
   AI Study Camp — Slide Navigation Engine
   ============================================ */
(function () {
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  const progressBar = document.getElementById('progress-bar');
  const currentNum = document.getElementById('current-num');
  const totalNum = document.getElementById('total-num');

  // Initialize
  if (totalNum) totalNum.textContent = total;
  goToSlide(0);

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(total - 1);
        break;
    }
  });

  // Click zone navigation
  var navPrev = document.getElementById('nav-prev');
  var navNext = document.getElementById('nav-next');
  if (navPrev) navPrev.addEventListener('click', prev);
  if (navNext) navNext.addEventListener('click', next);

  // Touch / swipe support
  var touchStartX = 0;
  document.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  });
  document.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  });

  function next() {
    if (current < total - 1) goToSlide(current + 1);
  }

  function prev() {
    if (current > 0) goToSlide(current - 1);
  }

  function goToSlide(n) {
    slides.forEach(function (s, i) {
      s.classList.remove('active', 'exiting-left');
      if (i < n) s.classList.add('exiting-left');
    });
    slides[n].classList.add('active');
    current = n;

    // Update progress bar
    if (progressBar) {
      var pct = ((n + 1) / total) * 100;
      progressBar.style.width = pct + '%';
    }

    // Update counter
    if (currentNum) currentNum.textContent = n + 1;
  }
})();
