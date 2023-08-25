function creatDate(year, month, day) {
  const date = new Date(year, month-1, day);
  return date;
}

console.log(creatDate(1993, 4, 2));
console.log(creatDate(1996, 2, 8));
