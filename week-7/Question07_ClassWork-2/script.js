function chunk(array, n) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += n) {
    chunkedArray.push(array.slice(i, i + n));
  }
  return chunkedArray;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
