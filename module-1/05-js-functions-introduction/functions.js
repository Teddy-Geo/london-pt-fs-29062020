function greetPerson(name) {
  return `Hello ${name}`;
}
console.log(greetPerson());
console.log(greetPerson("Sam"));
console.log(greetPerson("1"));

function addTip (total, tipPercentage) {
  return total + ((total * tipPercentage) /100)
}

console.log(addTip(100, 15));
console.log(addTip(67.8, 15));

const totalAfterTip = addTip(234, 5);

console.log(totalAfterTip);

function addTax (total) {
  return total * 1.2;
}

const total = addTax(totalAfterTip);
console.log(total);