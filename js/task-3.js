const string = prompt("введите строку для получения самого длинного слова");
console.log(string);
const findLongestWord = function (string) {
  if (!/^[A-Za-zА-Яа-яЁёІіЇїЄє\s]*$/.test(string)) {
    return "Ваша строка содержит посторонние символы";
  }
  const stringArray = string.toLowerCase().split(" ");
  let longestWord = stringArray[0];

  for (let i = 1; i < stringArray.length; i += 1) {
    if (stringArray[i].length > longestWord.length) {
      longestWord = stringArray[i];
    }
  }
  console.log(longestWord);
  return longestWord;
};

alert(`Самое длинное слово в вашей строке "${findLongestWord(string)}"`);
