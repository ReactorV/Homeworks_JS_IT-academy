var x = document.getElementsByTagName('input')[0];
var y = document.getElementsByTagName('input')[1];
var button = document.getElementsByTagName('input')[2];
var valueOfX;
var valueOfY;


x.onkeyup = function () {
  valueOfX = parseInt(x.value);

  if (typeof valueOfX === 'number' && 0 < valueOfX && valueOfX < 11) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'disabled');
    alert('Введите корректные данные!');
  }
};

y.onkeyup = function () {
  valueOfY = parseInt(y.value);

  if (typeof valueOfY === 'number' && 0 < valueOfY && valueOfY < 11) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'disabled');
    alert('Введите корректные данные!');
  }
};


button.onclick = function () {
  var parTab = document.getElementById('desk');

  if (parTab) parTab.parentNode.removeChild(parTab);

  var chessDesk = document.createElement('table');

  chessDesk.setAttribute('id', 'desk');

  for (var i = 0; i < valueOfX; i++) {
    var tr = document.createElement('tr');

    for (var j = 0; j < valueOfY; j++) {
      var td = document.createElement('td');

      if (i % 2 === j % 2) {
        td.className = "white";
      } else {
        td.className = "black";
      }
      tr.appendChild(td);
    }
    chessDesk.appendChild(tr);
  }

  document.body.appendChild(chessDesk);

  chessDesk.addEventListener('click', changeColor, false);
};


function changeColor(event) {
  var target = event.target;

  if (target.tagName === 'TD') {
    var tdAmount = document.getElementsByTagName('td');

    for (var i = 0; i < tdAmount.length; i++) {
      var blockColor = tdAmount[i];

      if (blockColor.classList.contains('white')) {
        blockColor.classList.add('black');
        blockColor.classList.remove('white');
      } else if (blockColor.classList.contains('black')) {
        blockColor.classList.add('white');
        blockColor.classList.remove('black');
      }
    }
  }
}