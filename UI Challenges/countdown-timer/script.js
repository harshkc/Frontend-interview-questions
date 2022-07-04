let SECONDS = 1000;
let MINUTES = 60 * 1000;

let minuteNode = document.getElementById("timer-display-min");
let secondsNode = document.getElementById("timer-display-sec");
let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset-btn");

let isPaused = false;
let timer = null;

function initiateTimer() {
  isPaused = false;
  let inputMinute = parseInt(minuteNode.value);
  let inputSecond = parseInt(secondsNode.value);
  if (isNaN(inputMinute) && isNaN(inputSecond)) {
    alert("Please enter valid values");
    return;
  }
  if (inputMinute <= 0 && inputSecond <= 0) {
    alert("Please enter positive values");
    return;
  }

  if (isNaN(inputMinute)) {
    inputMinute = 0;
  } else if (isNaN(inputSecond)) {
    inputSecond = 0;
  }

  let inputTime = inputMinute * MINUTES + inputSecond * SECONDS;
  timer = setInterval(function () {
    inputTime -= SECONDS;
    let minute = Math.floor(inputTime / MINUTES);
    let seconds = Math.floor((inputTime % MINUTES) / SECONDS);
    minuteNode.value =
      //add 0 if minute is less than 10
      minute < 10 ? "0" + minute : minute;
    secondsNode.value = seconds < 10 ? "0" + seconds : seconds;
    if (inputTime <= 0) {
      clearInterval(timer);
    }
  }, SECONDS);
}
//upon clicking this button timer should start
startBtn.addEventListener("click", initiateTimer);
//upon clicking this button timer should pause
pauseBtn.addEventListener("click", function () {
  if (!isPaused) {
    clearInterval(timer);
    isPaused = true;
  }
});
//upon clicking this button timer should reset
resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  isPaused = false;
  minuteNode.value = "00";
  secondsNode.value = "00";
});
