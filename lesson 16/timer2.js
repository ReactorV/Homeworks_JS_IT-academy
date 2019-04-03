var startP = document.getElementById("startPause");
    clockFace = document.getElementById("clockFace");
    saveBtn = document.createElement("button");
    reset = document.createElement("button");
    container = document.getElementsByClassName('container')[0];
    controls = document.getElementById('controls');
    time = 0;
    running = 0;
var timerSet;

//создание кнопки Запустить-возобновить
startP.addEventListener('click', startPause, false);

function startPause() {
  if (running == 0) {
    running = 1;
    timer();
    startP.innerHTML = "Приостановить";
    startP.style.backgroundColor = "red";
    saveBtn.innerHTML = "Сохранить отметку";
    controls.appendChild(saveBtn);
    reset.innerHTML = "Сбросить";
    controls.appendChild(reset);
  } else {
    running = 0;
    startP.innerHTML = "Возобновить";
    startP.style.backgroundColor = "bisque";
  }
}

//создание кнопки Сбросить
reset.addEventListener('click', resetValue, false);

function resetValue() {
  running = 0;
  time = 0;

  startP.innerHTML = "Запустить";
  clearTimeout(timerSet);
  clockFace.innerHTML = "00:00:00";

  var elementsOfEndTime = document.querySelectorAll('.results');
    for (var i = 0; i < elementsOfEndTime.length; i++) {
      elementsOfEndTime[i].parentNode.removeChild(elementsOfEndTime[i]);
      count = 1;
    }
  
    controls.removeChild(saveBtn);
    controls.removeChild(reset); 
}

//создание кнопки Сохранить отметку
saveBtn.addEventListener('click', saveValue, false);

var count = 1;
var endTime;

function saveValue() {
  endTime = document.createElement('div');
  endTime.classList.add('results');
  endTime.textContent = count++ + '. ' + clockFace.textContent;
  container.appendChild(endTime);
}

//создание секундомера
function timer() {
  if (running == 1)
    timerSet = setTimeout(function () {
      if (running == 1) {
      time++;
      var mins = Math.floor(time / 100 / 60);
      var secs = Math.floor(time / 100 % 60);
      var tenths = time % 100;
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      if (tenths < 10) {
        tenths = "0" + tenths;
      }
      if (time >= 3.6e6) {
        alert('Максимальное время вышло!');
        return;
      }
      clockFace.innerHTML = mins + ":" + secs + ":" + tenths;
      timer();
    }
  }, 10);
}
