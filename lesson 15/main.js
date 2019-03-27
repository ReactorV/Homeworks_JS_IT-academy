var button = document.getElementById('button');
var win = document.getElementById('window');
var wrapper = document.getElementById('wrapper');

button.addEventListener('click', prevent, false);

//Попытка сделать так, чтобы не отображались еще данные при нажатии на кнопку
function prevent(event) {
  if (document.getElementById('1')) {
    event.preventDefault();
  } else {
    localStorage.getItem('objUsers');
    var dataUsers = JSON.parse(localStorage.getItem('objUsers'));
    };
  };

button.addEventListener('click', request, false);

function request() {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

  xhr.onload = function () {

    var dataUsers = JSON.parse(this.response).data;
    console.log(dataUsers);

    localStorage.setItem('objUsers', JSON.stringify(dataUsers));

    //Создаем вкладки пользователей
    for (var i = 1; i <= dataUsers.length; i++) {
      var userBtn = document.createElement('div');
      userBtn.classList.add('btn');
      userBtn.textContent = 'User ' + i;
      userBtn.id = i;
      wrapper.appendChild(userBtn);
    };
    document.body.appendChild(wrapper);

    //Cоздаем вывод аватарки
    var userAvatar = document.createElement('img');
    userAvatar.src = dataUsers[0].avatar;
    userAvatar.classList.add('avatar');
    win.appendChild(userAvatar);

    //Cоздаем блок с именами
    var firstNameBlock = document.createElement('div');
    firstNameBlock.innerHTML = 'First Name: ' + dataUsers[0].first_name;
    firstNameBlock.classList.add('textBlock1');
    var lastNameBlock = document.createElement('div');
    lastNameBlock.innerHTML = 'Last Name: ' + dataUsers[0].last_name;
    lastNameBlock.classList.add('textBlock2');
    win.appendChild(firstNameBlock);
    win.appendChild(lastNameBlock);

    //Делаем активную вкладку
    var active = document.getElementById('1');
    active.classList.add('active');

    //Переключение вкладок
    wrapper.addEventListener('click', showUser, false);

    function showUser(event) {
      target = event.target;

      if (target.classList.contains('btn')) {
        userAvatar.src = dataUsers[target.id - 1].avatar;
        firstNameBlock.innerHTML = 'First Name: ' + dataUsers[target.id - 1].first_name;
        lastNameBlock.innerHTML = 'Last Name: ' + dataUsers[target.id - 1].last_name;

        var activeBtn = document.getElementsByClassName('active')[0];
        activeBtn.classList.remove('active');
        activeBtn.classList.add('closed');
        target.classList.add('active');
      };
    };
  };

  xhr.onerror = function () {
    console.log(this.status + ':' + this.statusText);
  }

  xhr.send();
}