const result = document.querySelector('.result');
const sort = document.querySelector('.sort');

function sumInput() {
  let array = [];
  while (true) {
    const number = prompt('Введите число:');
    if (number == '')break;
    array.push(+number);
  }
  array.sort();
  let sum = 0;
  for (let number of array) {
    sum = sum + number;
  }
  console.log(sum);
  result.innerHTML = `Итого получилось ${sum}`;
  sort.innerHTML = `Числа по возрасанию ${array.sort()}`;
}
sumInput();
