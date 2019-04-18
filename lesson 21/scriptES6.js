/*Задание 1:
Запросить у пользователя имя и сохранить его в свойство объекта (использовать сокращенную запись).
У объекта также должен быть метод sayHi, который будет возвращать строку вида:
    "Hi, (имя пользователя)!"
Проверить работу метода. Убедиться в уместном использовании способов задания переменной.*/
{
    let name = prompt('Ваше имя?');

    const obj = {
        name,
        sayHi() {
            alert(`Hi, ${this.name}!`)
        }
    };
    obj.sayHi();
}
/*Задание 2:
Написать функцию, которая будет принимать параметры x, y, z.
    При вызове функции передать в неё первым параметром объект вида {a: 2, b: 3}, вторым параметром целое число.
    X и y получаем из свойств переданного в функцию объекта a и b. У z значение по-умолчанию должно быть 1.
Функция должна возвращать результат возведения в степень y числа x, умноженный на z.
    Валидацию опустить.*/
{
    function func({a: x, b: y}, z = 1) {
        return (x ** y) * z;
    };

    func({a: 2, b: 3}, 2);
}

/*Задание 3:
Создать массив с именем и возрастом. Передать его в функцию. Функция должна принять его как два отдельных параметра
name и age и вернуть строку вида:
    "Hello, I'm (имя) and I'm (возраст) years old.*/

{
    let arr = ['Petr', 32];

    function getData(name, age) {
        console.log(`Hello, I'm ${name} and I'm ${age} years old.`)
    }

    getData(...arr);
}

/*Задание 4:
Написать функцию, принимающую массив чисел. При вызове числа передаются в функцию отдельными параметрами.
Вывести в консоль числа последовательно.*/

{
    function getNumm(...arr) {
        for (let val of arr) {
            console.log(val);
        }
    }

    getNumm(1, 3);
}

/*Задание 5:
Переписать решение задачи с поиском гласных на новый синтаксис.
    function countVowelLetters(text) {
    text = text.toLowerCase().split('');

    var vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
        counter = 0;

    for (var i = 0; i < vowelLetters.length; i++) {
        for (var j = 0; j < text.length; j++) {
            vowelLetters[i] === text[j] && counter++;
        }
    }

    return counter;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12*/
{
function countVowelLetters(text) {
   text = text.toLowerCase().split('');

    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

    let counter = 0;

    text.forEach(letter => vowelLetters.includes(letter)&&counter++);

    return counter;
};
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');

/*Задание 6:
Написать функцию, принимающую массив объектов вида:
    [
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ]
и возвращающую объект вида:
{
    Пользователи младше 40: [
    {name: 'Vasya Pupkin', age: 25},
    {name: 'Ivan Petrov', age: 30}
],
    Пользователь с именем Федор: {name: 'Fedor Ivanov', age: 42}*/

{    
let arr = [
    {name: 'Vasya Pupkin', age: 25},
    {name: 'Ivan Petrov', age: 30},
    {name: 'Fedor Ivanov', age: 42}
];

let getInfo = function (arr) {

    let filterValue = arr.filter(item => item.age < 40);

    let findValue = arr.find(item => item.name.includes('Fedor'));

    let objM = {
        Пользователи_младше_40: filterValue,
        Пользователь_с_именем_Федор: findValue
    };

    return objM;
}

getInfo(arr);
}

/* Задание 7:
Написать функцию, принимающую массив имен пользователей и возвращающую массив объектов вида:
[
    {Пользователь 1: 'Вася'},
    {Пользователь 2: 'Петя'}
] */
{
let arr = ['Вася', 'Петя'];

let getUsers = function(arr) {
    return arr.map((name, i) => {    
       const obj = {};
       
       obj[`Пользователь ${i+1}`] = name;
  
    return obj;
    });
}

getUsers(arr);
}

/* Задание 8:
    Написать функцию, принимающую массив объектов и объединяющую их в один объект. Например:
      [
          {name: 'Vasya'},
          {name: 'Piotr', age: 25},
          {salary: '2000$'}
      ]
    необходимо преобразовать в
      {
          name: 'Piotr',
          age: 25,
          salary: '2000$'
      } */
{
let arr = [
    {name: 'Vasya'},
    {name: 'Piotr', age: 25},
    {salary: '2000$'}
]

function unitObject(arr) {
    let newObj =  arr.reduce(function (a, b) { 
        let obj = Object.assign(a, b);
        return obj;
    });
    return newObj;
}
}


/* Задание 9:
    Переписать последнее задание с ООП на новый синтаксис. Проверить работоспособность всех методов.
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
  };
  
  Animal.prototype._getFormattedFoodAmount = function () {
    return this._foodAmount + 'гр.';
  };
  
  Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._foodAmount;
  
    if (amount < 50 || amount > 500) {
      return 'Недопустимое количество корма.';
    }
    this._foodAmount = amount;
  };
  
  Animal.prototype.feed = function () {
    return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
  };
  
  
  function Cat(name) {
    Animal.apply(this, arguments);
  };
  
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  
  Cat.prototype.feed = function () {
    console.log(Animal.prototype.feed.apply(this) +
      +'\n' + 'Кот доволен ^_^');
    return this;
  };
  
  Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this;
  };
  
  var barsik = new Cat('Барсик');
  console.log(barsik.feed().stroke());
  console.log(barsik.stroke().feed()); */
{
  class Animal {
      constructor(name) {
          this.name = name;
          this._foodAmount = 50;
      }

      _getFormattedFoodAmount() {
          return `${this._foodAmount} гр.`;
      }

      dailyNorm(amount) {
          if (!arguments.length) return this._foodAmount;

          if (amount < 50 || amount > 500) {
              return 'Недопустимое количество корма.';
          }
          this._foodAmount = amount;
      };

      feed() {
          return `Насыпаем в миску ${this._getFormattedFoodAmount()} корма.`;
      };
  }

  class Cat extends Animal {
      constructor(name) {
          super();
          this.name = name;
      }

      feed() {
          console.log(`${super.feed()} 
            Кот доволен ^_^`);
          return this;
      }

      stroke() {
          console.log('Гладим кота');
          return this;
      };
  }
  var barsik = new Cat('Барсик');
  console.log(barsik.feed().stroke());
  console.log(barsik.stroke().feed());
}