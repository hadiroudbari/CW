function creatDate(date, time, locale) {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: time,
  };
  const inernational = new Intl.DateTimeFormat(locale, options).format(date);
  return inernational;
}
const newDate = new Date();
console.log(creatDate(newDate, "Asia/Tehran", "fa-IR"));
