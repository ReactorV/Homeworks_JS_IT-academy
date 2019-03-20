Домашнее задание:

/* Задание 1:
Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом(напр.шалаш).
Регистр в словах учитываться не должен.Тестировать функцию можно только на одиночных словах(без фраз).
Функция должна работать следущим образом:
isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false */

function isPalindrome(word) {
  var reverseWord = word.split('').reverse().join('').toLowerCase();

  return reverseWord == word.toLowerCase();
}


/* Задание 2:
Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами(напр.кот и отк).
Регистр в словах учитываться не должен.
Функция должна работать следущим образом:
isAnagram('кот', 'отк'); // true
isAnagram('кот', 'атк'); // false
isAnagram('кот', 'отко'); // false */

function isAnagram(compareWord, anagram) {
  if (compareWord.length == anagram.length) {

    var sortCompareWord = compareWord.split('').sort().join('').toLowerCase();
    var sortAnagram = anagram.split('').sort().join('').toLowerCase();

    if (sortCompareWord == sortAnagram) {
      return true;
    }
  }
  return false;
}


/* Задание 3:
Написать функцию, которая будет разбивать массив на под - массивы определенной длины.
Функция должна работать следущим образом:
divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [4, 5]] */

function divideArr(arr, arrLength) {
  var resultArr = [];

  while (arr.length) {
    resultArr.push(arr.splice(0, arrLength));
  }
  return resultArr;
}

console.log(divideArr([1, 2, 3, 4, 5], 3));


/* Задание 4:
Написать чистую функцию, которая будет возвращать количество гласных в переданном тексте.Функция должна быть
оптимизированной. */

function getAmountVowel(string) {
  var vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
  var optimizedString = string.toLowerCase().split('');
  var count = 0;

  for (i = 0; i < vowels.length - 1; i++) {

    for (j = 0; j < optimizedString.length; j++) {
      if (vowels[i] === optimizedString[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(getAmountVowel('Написать чистую функцию'));


/* Задание 5 *:
Написать функцию, которая будет находить в переданном ей тексте наиболее часто повторяемое 
слово и возвращать информацию вида:'Максимальное число повторений у слова "привет" - 8.'
При решении предположить, что у двух и более слов не может быть одинакового количества повторений. */

function findOftenWord(text) {
  var textSplit = text.toLowerCase().split(' ');
  var textString = textSplit.join(' ');
  var wordsNumber = {};
  var arrOfKeys = [];
  var arrOfValues = [];
  var maxNumber;
  var repeat;

  for (i = 0; i < textSplit.length - i - 1; i++) {
    wordsNumber[textSplit[i]] = textString.split(textSplit[i]).length - 1;
  }

  for (var key in wordsNumber) {
    arrOfKeys.push(key);
    arrOfValues.push(wordsNumber[key]);
  }

  maxNumber = arrOfValues[0];

  for (var j = 0; j < arrOfKeys.length; j++) {
    if (maxNumber <= arrOfValues[j]) {
      maxNumber = arrOfValues[j];
      repeat = arrOfKeys[j];
    }
  }
  return 'Максимальное число повторений у слова ' + '"' + repeat + '"' + ' - ' + maxNumber + '.'
}

var text = "Хороший день День был вчера был был был."
console.log(findOftenWord(text));


/* Задание 6*:
Написать функцию, которая будет принимать текст в качестве параметра.У текста должны быть пробелы, точки, запятые,
восклицательные и вопросительные знаки.Текст необходимо разбить на предложения(по точкам, восклицательным и
вопросительным знакам - убрав их).Для каждого из предложений вывести текст предложения
и рядом количество букв в нем(без учета пробелов, запятых и т.д. - именно букв). */

function divideSent(text) {
  var text1 = text.split('?').join('.');
  var text2 = text1.split('!').join('.');
  var arrOfSentence = text2.split('.');
  
  for (i = 0; i < arrOfSentence.length - 1; i++) {
    var withoutCommas = arrOfSentence[i].split(',').join('');
    var withoutHypens = withoutCommas.split('-').join('');
    var withoutSpaces = withoutHypens.split(' ').join('');
    var numberOfLetters = withoutSpaces.length;
    console.log("Текст предлжения: " + arrOfSentence[i] + ' |всего букв: ' + numberOfLetters);
  }
}

var text = 'Надо написать функцию! Чтобы выводила текст, буквы, или другую? Без запятых, точек, и других знаков.';
divideSent(text);




