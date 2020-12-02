let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Пожалуйста, введите число");
  if (input === null) {
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else {
    numbers.push(Number(input));
  }
}

for (const number of numbers) {
  if (number !== null) {
    total += number;
  }
}
1
console.log(`Общая сумма чисел равна ${total}.`);
