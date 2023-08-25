const getMaxDate = function (arr) {
  const milisecond = arr.map((item) => new Date(item).getTime());

  return new Date(Math.max(...milisecond));
};
console.log(getMaxDate(["2015/02/01", "2015/02/02", "2015/01/03"]));
