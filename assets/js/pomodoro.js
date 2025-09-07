const $ = (s) => document.querySelector(s);
const timeEl = $('#time');
const cycleLabel = $('#cycleLabel');
const startPauseBtn = $('#startPause');
const resetBtn = $('#reset');
const skipBtn = $('#skip');
const tabs = document.querySelectorAll('.tab');
const beep = $('#beep');

const focusMins = $('#focusMins');
const shortMins = $('#shortMins');
const longMins  = $('#longMins');
const cyclesInp = $('#cycles');
const autoNext  = $('#autoNext');
const sound     = $('#sound');
const notify    = $('#notify');

const progress = document.querySelector('.progress');
const CIRC = 2 * Math.PI * 54; // ~339.292

// State
let mode = 'focus'; // 'focus' | 'short' | 'long'
let total = 25 * 60;
let remaining = total;
let timer = null;
let cycleCount = 1;
let isRunning = false;

// Helpers
function setRing(pct) { // pct: 0..1
  const off = CIRC * (1 - pct);
  progress.style.strokeDasharray = CIRC;
  progress.style.strokeDashoffset = off;
}
function fmt(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2,'0')}`;
}
function updateTitle() {
  document.title = `${fmt(remaining)} • ${mode === 'focus' ? 'Focus' : (mode === 'short' ? 'Short Break' : 'Long Break')}`;
}
function label() {
  const name = mode === 'focus' ? 'Focus' : (mode === 'short' ? 'Short Break' : 'Long Break');
  cycleLabel.textContent = `Cycle ${cycleCount} • ${name}`;
}

// Mode switching
function setMode(next) {
  mode = next;
  tabs.forEach(t => {
    const active = t.dataset.mode === mode;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  const mins = (mode === 'focus' ? +focusMins.value :
               mode === 'short' ? +shortMins.value : +longMins.value) || 1;
  total = Math.max(1, mins) * 60;
  remaining = total;
  setRing(1);
  timeEl.textContent = fmt(remaining);
  label();
  updateTitle();
}

function playBeep() {
  if (!sound.checked) return;
  try { beep.currentTime = 0; beep.play(); } catch {}
}

async function notifyUser(text) {
  if (!notify.checked) return;
  if (Notification.permission === 'default') {
    try { await Notification.requestPermission(); } catch {}
  }
  if (Notification.permission === 'granted') {
    new Notification('Pomodoro', { body: text });
  }
}

function nextAutoMode() {
  if (mode === 'focus') {
    if (cycleCount % Math.max(2, +cyclesInp.value || 4) === 0) {
      setMode('long');
    } else {
      setMode('short');
    }
  } else {
    if (mode !== 'focus') cycleCount += 1;
    setMode('focus');
  }
}

function tick() {
  if (remaining > 0) {
    remaining -= 1;
    timeEl.textContent = fmt(remaining);
    setRing(remaining / total);
    updateTitle();
  } else {
    clearInterval(timer); timer = null; isRunning = false;
    startPauseBtn.textContent = 'Start';
    playBeep();
    notifyUser(mode === 'focus' ? 'Focus complete. Break time!' : 'Break over. Back to focus.');
    nextAutoMode();
    if (autoNext.checked) startTimer();
  }
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  startPauseBtn.textContent = 'Pause';
  if (!timer) timer = setInterval(tick, 1000);
}
function pauseTimer() {
  isRunning = false;
  startPauseBtn.textContent = 'Start';
  clearInterval(timer); timer = null;
}
function resetTimer() {
  pauseTimer();
  setMode(mode);
}

startPauseBtn.addEventListener('click', () => isRunning ? pauseTimer() : startTimer());
resetBtn.addEventListener('click', resetTimer);
skipBtn.addEventListener('click', () => {
  pauseTimer();
  nextAutoMode();
});

tabs.forEach(t => t.addEventListener('click', () => { pauseTimer(); setMode(t.dataset.mode); }));

[focusMins, shortMins, longMins, cyclesInp].forEach(inp => {
  inp.addEventListener('change', () => { pauseTimer(); setMode(mode); });
});

// Keyboard shortcuts: Space start/pause, R reset, S skip
window.addEventListener('keydown', (e) => {
  if (['INPUT'].includes(e.target.tagName)) return;
  if (e.code === 'Space') { e.preventDefault(); isRunning ? pauseTimer() : startTimer(); }
  if (e.key.toLowerCase() === 'r') resetTimer();
  if (e.key.toLowerCase() === 's') { pauseTimer(); nextAutoMode(); }
});

// Init
setMode('focus');
updateTitle();
