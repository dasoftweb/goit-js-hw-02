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

console.log(`Общая сумма чисел равна ${total}.`);
