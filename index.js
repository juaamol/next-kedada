function countdown(dateEndContdown) {
  let timer, days, hours, minutes, seconds;
  let dateEnd = new Date(dateEndContdown);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) {
    return;
  }

  calculate();
  timer = setInterval(calculate, 1000);

  function calculate() {
    let dateStart = new Date();
    let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;
      seconds = parseInt(timeRemaining);
    } else {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }
}
function setDays(days) {
  setTime('days', parseInt(days, 10));
}

function setHours(hours) {
  setTime('hours', ('0' + hours).slice(-2));
}

function setMinutes(minutes) {
  setTime('minutes', ('0' + minutes).slice(-2));
}

function setSeconds(seconds) {
  setTime('seconds', ('0' + seconds).slice(-2));
}

function setTime(unit, time) {
  document.getElementById(unit).innerHTML = time;
}
