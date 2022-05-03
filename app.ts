window.onload = function () {
  var startButton = document.getElementById('startTimer');
  var stopButton = document.getElementById('stopTimer');
  var resetButton = document.getElementById('resetTimer');
  var appendMiliseconds = document.getElementById('miliseconds');
  var appendSeconds = document.getElementById('seconds');
  var appendMinutes = document.getElementById('minutes');
  var minutes = 0;
  var seconds = 0;
  var miliseconds = 0;
  var Interval;
  startButton.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  stopButton.onclick = function () {
    clearInterval(Interval);
  };
  resetButton.onclick = function () {
    clearInterval(Interval);
    seconds = 0;
    miliseconds = 0;
    minutes = 0;
    appendMiliseconds.innerHTML = miliseconds + "0";
    appendSeconds.innerHTML = seconds + "0";
    appendMinutes.innerHTML = minutes + "0";
  };

  function startTimer(startTimer, arg1) {
    miliseconds++;
    if (miliseconds > 9) {
      appendMiliseconds.innerHTML = 0 + miliseconds;
    }
    if (miliseconds > 98) {
      miliseconds = 0;
      seconds++;
      appendSeconds.innerHTML = seconds
      console.log(seconds);
    }
    if seconds < 10) {
    appendSeconds.innerHTML = "0" + seconds;
  }
  if (seconds > 59) {
    seconds = 0;
    minutes++;
    appendMinutes.innerHTML = minutes;
  }
  if (minutes < 10) {
    appendMinutes.innerHTML = "0" + minutes;
  }
}
};