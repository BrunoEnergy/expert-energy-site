(() => {
  const dialog = document.getElementById('energy-tech');
  const trigger = document.querySelector('[data-energy-tech]');
  if (!dialog || !trigger || !dialog.showModal) return;
  let timer;
  let previousFocus;
  let remaining = 14000;
  let startedAt;
  let paused = false;
  const pauseButton = dialog.querySelector('[data-pause]');
  const status = dialog.querySelector('[data-playback-status]');
  const key = 'expert-energy-tech-film-seen-v2';
  const close = () => dialog.close();
  const startTimer = () => {
    startedAt = performance.now();
    timer = window.setTimeout(close, remaining);
  };
  const open = () => {
    if (dialog.open) return;
    previousFocus = document.activeElement;
    dialog.showModal();
    dialog.classList.add('et-playing');
    document.documentElement.classList.add('energy-tech-open');
    try { sessionStorage.setItem(key, '1'); } catch (_) { /* Storage can be disabled. */ }
    startTimer();
  };
  // The header is the sales channel: its anchor keeps normal navigation.
  pauseButton.addEventListener('click', () => {
    paused = !paused;
    if (paused) {
      window.clearTimeout(timer);
      remaining = Math.max(0, remaining - (performance.now() - startedAt));
    } else {
      startTimer();
    }
    dialog.classList.toggle('et-paused', paused);
    pauseButton.textContent = paused ? 'Continuar' : 'Pausar';
    pauseButton.setAttribute('aria-label', paused ? 'Continuar apresentação' : 'Pausar apresentação');
    status.textContent = paused ? 'Apresentação pausada' : 'Fecha ao terminar a apresentação';
  });
  dialog.querySelector('[data-close]').addEventListener('click', close);
  dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
  dialog.addEventListener('close', () => {
    window.clearTimeout(timer);
    dialog.classList.remove('et-playing', 'et-paused');
    document.documentElement.classList.remove('energy-tech-open');
    (previousFocus && previousFocus !== document.body ? previousFocus : trigger).focus({ preventScroll: true });
  });
  let seen = false;
  try { seen = sessionStorage.getItem(key) === '1'; } catch (_) { /* Show once in this page. */ }
  if (!seen) open();
})();
