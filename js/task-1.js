const names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let message;

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    message = `${i + 1} - ${array[i]}`;
    console.log(message);
  }
};

logItems(names);
logItems(numbers);

// const logItems = function (array) {
//   array.forEach(function (item, index, array) {
//     console.log(
//       `Элемент - (${item}) - с индексом - (${
//         index + 1
//       }) - в массиве - [${array}]`
//     );
//   });
// };

// logItems(names);
// logItems(numbers);
