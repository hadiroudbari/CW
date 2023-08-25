function findEvenNumbers(numbers) {
  const evenNumber = numbers.filter((number) => number % 2 === 0);
  return evenNumber;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumbers(array));
