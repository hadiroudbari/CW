function checklsDate(date) {
  return date instanceof Date;
}

console.log(checklsDate("October 13, 2014 11 : 13:00"));
console.log(checklsDate(new Date(86400000)));
console.log(checklsDate(new Date(99, 5, 24, 11)));
console.log(checklsDate([1, 2, 4, 0]));
