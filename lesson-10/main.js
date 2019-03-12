Домашнее задание:

  Задание 1:
Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом(напр.шалаш).
Регистр в словах учитываться не должен.Тестировать функцию можно только на одиночных словах(без фраз).
Функция должна работать следущим образом:
isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false

function isPalindrome(word) {
  var reverseWord = word.split('').reverse().join('').toLowerCase();

  if (reverseWord == word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}


Задание 2:
Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами(напр.кот и отк).
Регистр в словах учитываться не должен.
Функция должна работать следущим образом:
isAnagram('кот', 'отк'); // true
isAnagram('кот', 'атк'); // false
isAnagram('кот', 'отко'); // false

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


Задание 3:
Написать функцию, которая будет разбивать массив на под - массивы определенной длины.
Функция должна работать следущим образом:
divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [4, 5]]

function divideArr(arr, arrLength) {
  var firstArr = arr.splice(0, arrLength);
  var resultArr = [firstArr, arr];
  console.log(resultArr);
}


Задание 4:
Написать чистую функцию, которая будет возвращать количество гласных в переданном тексте.Функция должна быть
оптимизированной.

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

