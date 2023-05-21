let nIntervId = null;

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stoptBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.stoptBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', onStartBtnChangeColor);
refs.stoptBtn.addEventListener('click', onStoptBtnChangeColor);

function onStartBtnChangeColor() {
  refs.startBtn.setAttribute('disabled', true);
  refs.stoptBtn.removeAttribute('disabled');

  nIntervId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStoptBtnChangeColor() {
  refs.stoptBtn.setAttribute('disabled', true);
  refs.startBtn.removeAttribute('disabled');

  clearInterval(nIntervId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
