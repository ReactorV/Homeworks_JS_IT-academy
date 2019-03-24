var btn = document.getElementById('button');
var firstTd = document.getElementById('firstTd');
btn.addEventListener('click', clickBtn, false);

function clickBtn() {
  firstTd.insertAdjacentHTML('beforeBegin', '<tr><td></td><td></td><td></td></tr>');
}

/*По клику на ячейку таблицы, в ней появляется сфокусированный текстовый инпут*/
var table = document.getElementsByTagName('tbody')[0];
table.addEventListener('click', addInput, false);

function addInput(event) {
  var target = event.target;
  var valOfTd = target.textContent;

  if (target.tagName === 'TD' && target != btn) {

    target.innerHTML = ('<input type="text" onfocus="" id="inp">');
    document.getElementById('inp').value = valOfTd;

    var inputFocus = document.getElementsByTagName('input')[0];

    inputFocus.addEventListener('blur', function text(event) {
      var targ = event.target;
      targ.parentNode.textContent = targ.value;
    }, false);
  }
};