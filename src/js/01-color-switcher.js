const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timer = null;
const TIME_DELAY = 1000;

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor(){
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timer = setInterval(colorChangeHandler, TIME_DELAY);
    colorChangeHandler();
    console.log('start');
}

function stopChangeColor(){
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(timer);
    console.log('stop');
}

function colorChangeHandler(){
    bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


