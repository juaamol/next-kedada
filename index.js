function countdown(dateEndContdown) {
  let timer, days, hours, minutes, seconds;
  let dateEnd = new Date(dateEndContdown);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) {
    return;
  }

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

      document.getElementById('days').innerHTML = parseInt(days, 10);
      document.getElementById('hours').innerHTML = ('0' + hours).slice(-2);
      document.getElementById('minutes').innerHTML = ('0' + minutes).slice(-2);
      document.getElementById('seconds').innerHTML = ('0' + seconds).slice(-2);
    } else {
      document.getElementById('days').innerHTML = '00';
      document.getElementById('hours').innerHTML = '00';
      document.getElementById('minutes').innerHTML = '00';
      document.getElementById('seconds').innerHTML = '00';
    }
  }
}
