cdПрактическое задание 4:
    Создать класс Animal.Перенести в него все свойства и методы.Сделать метод getFormattedFoodAmount
защищенным.Отнаследоваться внутри Cat от Animal.
Расширить метод feed для кошек.Теперь он должен выводить в консоль информацию вида:
    "Насыпаем в миску (количество) грамм корма.
Кот доволен ^ _ ^ "
Использовать вызов родительского метода вида animalFeed() и сохранение контекста this через переменную.
Все вызовы, которые работали ранее, должны по - прежнему работать корректно.

Практическое задание 5:
    Добавить метод stroke, который будет выводить в консоль информацию "Гладим кота.".
Доделать метод feed таким образом, чтобы можно было цепочкой вызывать его и метод stroke в любой
последовательности и сколько угодно раз.
    (Лишние логи можно убрать).

function Animal(name) {
    var foodAmount = 50;
    var self = this;
    this._getFormattedFoodAmount = function () {
        return foodAmount + 'гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }
        foodAmount = amount;
    };

    this.name = name;

    this.feed = function () {
        return 'Насыпаем в миску ' + self._getFormattedFoodAmount() + ' корма.';
    };
}


function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function (args) {
        console.log(animalFeed.apply(this, args) + '\n' + 'Кот доволен ^_^');
        return this;
    };

    this.stroke = function () {
        console.log('Гладим кота');
        return this;
    };
}

var barsik = new Cat('Барсик');
console.log(barsik.feed().stroke());
console.log(barsik.stroke().feed());

