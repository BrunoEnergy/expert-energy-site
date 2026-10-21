(() => {
  const dialog = document.getElementById('energy-tech');
  const trigger = document.querySelector('[data-energy-tech]');
  if (!dialog || !trigger || !dialog.showModal) return;
  let timer;
  let previousFocus;
  const key = 'expert-energy-tech-seen-v1';
  const close = () => dialog.close();
  const pause = () => window.clearTimeout(timer);
  const open = () => {
    if (dialog.open) return;
    previousFocus = document.activeElement;
    dialog.showModal();
    document.documentElement.classList.add('energy-tech-open');
    try { sessionStorage.setItem(key, '1'); } catch (_) { /* Storage can be disabled. */ }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = window.setTimeout(close, 24000);
    }
  };
  trigger.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    open();
  });
  dialog.querySelector('[data-close]').addEventListener('click', close);
  dialog.addEventListener('pointerenter', pause);
  dialog.addEventListener('keydown', pause);
  dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
  dialog.addEventListener('close', () => {
    pause();
    document.documentElement.classList.remove('energy-tech-open');
    (previousFocus && previousFocus !== document.body ? previousFocus : trigger).focus({ preventScroll: true });
  });
  let seen = false;
  try { seen = sessionStorage.getItem(key) === '1'; } catch (_) { /* Show once in this page. */ }
  if (!seen) open();
})();
