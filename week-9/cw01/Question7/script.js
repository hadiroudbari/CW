function calculateTotalAndAverage(numbers) {
  let total = 0;
  numbers.forEach((number) => {
    total += number;
  });
  const average = total / numbers.length;
  return { total, average };
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculateTotalAndAverage(array));
