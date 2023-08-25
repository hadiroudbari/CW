function creatDate(year, month, day) {
  const date = new Date(year, month, day);
  return date;
}

const dateOne = creatDate(1993, 4, 2);
const dateTwo = creatDate(1996, 2, 8);

function cal(date1, date2) {
  const different = Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  return different;
}

console.log(cal(dateOne, dateTwo));
