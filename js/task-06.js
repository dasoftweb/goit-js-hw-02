let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Пожалуйста, введите число");
  if (input === null) {
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(input);
}

for (const number of numbers) {
  total += number;
}

if (numbers.length !== 0) {
console.log(`Общая сумма чисел равна ${total}.`);
}

// FOR --------------------------------------------//

// let input;
// const numbers = [];
// let total = 0;

// for (input = 0; true; total += input) {
//   input = prompt("Пожалуйста, введите число");
//   if (input === null) {
//     break;
//   }
//   input = Number(input);
//   if (Number.isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     numbers.push(input);
//   }
// }

// if (numbers.length !== 0) {
//   console.log(`Общая сумма чисел равна ${total}.`);
//   }
