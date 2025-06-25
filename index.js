const modeBtnEl = document.querySelector('#mode-btn');
const nextModeTextEl = document.querySelector('#mode-next');
let currentMode = 'light';
let nextMode = 'dark';

modeBtnEl?.addEventListener('click', toggleMode);

function toggleMode() {
  const temp = currentMode;
  currentMode = nextMode;
  nextMode = temp;

  applyMode();
}

function applyMode() {
  document.body.dataset.mode = currentMode;
  nextModeTextEl.textContent = nextMode;
}

applyMode();
