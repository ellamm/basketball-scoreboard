let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function updateTimerDisplay() {
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      updateTimerDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
}
