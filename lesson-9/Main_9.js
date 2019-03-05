
Задание 1:
Переписать на прототипный стиль ООП:


function Animal(name) {
    this._foodAmount = 50;
    this._name = name;
    };

    Animal.prototype._getFormattedFoodAmount = function() {
        return this._foodAmount + 'гр.';
    };

    Animal.prototype.dailyNorm = function(amount) {
        if (!arguments.length) return this._foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }
        this._foodAmount = amount;
    };

    Animal.prototype.feed = function() {
        return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
    };


function Cat(name) {
  Animal.apply(this, arguments);
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
  console.log(Animal.prototype.feed.apply(this) +
  + '\n' + 'Кот доволен ^_^');
  return this;
};
   
Cat.prototype.stroke = function () {
  console.log('Гладим кота');
  return this;
};

var barsik = new Cat('Барсик');
console.log(barsik.feed().stroke());
console.log(barsik.stroke().feed());

Задание 2:
    Написать функцию глубокого клонирования объектов. Клонироваться должны значения всех типов, а также любого уровня
    вложенности. Метод isArray использовать можно. Хорошо протестировать работу функции.


function makeClone(obj) {
  if(obj == null || typeof(obj) != "object") return obj;

  var newClone = Array.isArray(obj) ? [] : {}; 
  
  for(var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if ("object" === typeof obj[key]) {
      newClone[key] = makeClone(obj[key]);
      } else {
        newClone[key] = obj[key];
      } 
      }
    }
  return newClone;
  }    

var testObject = {
  string: 'String',
  number: 29,
  arr: [1,2,3]
};

var test = makeClone(testObject);
console.log(test);

 
