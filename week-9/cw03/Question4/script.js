function convertToTime(number) {
  const hour = Math.trunc(number / 60);
  const min = number % 60;
  return ` ${number} minutes = ${hour} hour , ${min} minutes`;
}
console.log(convertToTime(200));
