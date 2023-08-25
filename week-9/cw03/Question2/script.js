const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function monthName(date) {
  const monthIndex = date.getMonth();
  return monthNames[monthIndex];
}
console.log(monthName(new Date("10/11/2009")));
console.log(monthName(new Date("11/13/2014")));
