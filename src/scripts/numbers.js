const resault = document.querySelector('.resault');

function sumInput() {
  let items = [];
  while (true) {
    const number = prompt('Введите число:');
    if (number == '') break;
    items.push( = number);
  }
  items.sort();
  let sum = 0;
  for (let number of items) {
    sum = sum + number;
  }
  console.log(sum);
  resault.innerHTML = sum;
}
sumInput();
