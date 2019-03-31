var startP = document.getElementById("startPause");
clockFace = document.getElementById("clockFace");
saveBtn = document.createElement("button");
reset = document.createElement("button");
container = document.getElementsByClassName('container')[0];

time = 0;
running = 0;

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
  };
}

//создание кнопки Сбросить
reset.addEventListener('click', resetValue, false);

function resetValue() {
  running = 0;
  time = 0;
  startP.innerHTML = "Запустить";
  clockFace.innerHTML = "00:00:00";
  var elementsOfEndTime = document.querySelectorAll('.results');
  console.log(elementsOfEndTime);
  for (var i = 0; i < elementsOfEndTime.length; i++) {
    elementsOfEndTime[i].parentNode.removeChild(elementsOfEndTime[i]);
    count = 1;
  };
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
  if (running == 1) {
    setTimeout(function () {
      time++;
      var mins = Math.floor(time / 10 / 60);
      var secs = Math.floor(time / 10 % 60);
      var tenths = time % 10;
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      clockFace.innerHTML = mins + ":" + secs + ":" + tenths + "0";
      timer();
    }, 100);
  };
}