const number = +prompt("Enter your number:");

function roundNum(num) {
  const rounded = Math.round(num);
  return rounded;
}
console.log(roundNum(number));
