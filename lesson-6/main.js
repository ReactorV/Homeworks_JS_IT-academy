Задание 2:
  Напишите функцию преобразования ключей и значений объекта. Функция должна из полученного объекта вида {name: 'Vasya'}
  вернуть объект вида {name_length: 5}. К ключам добавляется приставка '_length', значение - длина предыдущего значения.
  Новых объектов не создавать.

Усовершенствуйте задание 2 таким образом, чтобы функция, принимая объект вида
  {
      name_one: 'Vasya',
      name_two: 'Piotr',
      name_three: 'Fedya',
      name_four: 'Piotr'
  }
  отдавала объект вида
  {
      name_four_length: 5
      name_one_length: 5
      name_three_length: 5
      name_two_length: 5
      'Дублирующиеся значения': {
          Piotr: '2 раз(а)'
      }
  }
  В решении использовать только пройденный материал.

function searchDuplicate(obj){
  var newObject = {};
  var values = [];
  var dulicateValues = {};


  for (var k in obj) {
      newObject[k + '_length'] = obj[k].length;
      values.push(obj[k]);
  }

  for(var i = 0; i < values.length; i++){
      var valuePrevious = values[i];
      var counter = 0;

      for(var j = 0; j < values.length; j++){
          var valueNext = values[j];
          if(valuePrevious === valueNext){
              counter++;
              dulicateValues[valueNext] = counter;
          }
      }

      if(dulicateValues[valuePrevious] <= 1){
          delete dulicateValues[valuePrevious];
      }

  }
  newObject['Дублирующиеся значения'] = dulicateValues;

  return newObject;
}

var namesVal = { 
  name_one: 'Vasya',
  name_two: 'Piotr',
  name_three: 'Fedya',
  name_four: 'Piotr'
}

searchDuplicate(namesVal);