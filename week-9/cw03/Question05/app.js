function calPassedDay(date) {
  const year = date.getFullYear();
  const currentDate = new Date(year, 0, 0);
  const result = Math.abs(currentDate - date) / (1000 * 60 * 60 * 24);
  return result;
}
console.log(calPassedDay(new Date(2015, 0, 15)));
console.log(calPassedDay(new Date(2015, 11, 14)));
