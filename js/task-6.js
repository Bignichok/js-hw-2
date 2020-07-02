const arraySum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  return total;
};
let input;
const numbers = [];

do {
  input = prompt("введите число");

  if (input === null) {
    alert(`Отменено пользователем!`);

    if (numbers.length > 0) {
      console.log(`Сумма чисел равна ${arraySum(numbers)}`);
    }
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert("Было введено не число");
    continue;
  }

  numbers.push(Number(input));
} while (input !== null);
