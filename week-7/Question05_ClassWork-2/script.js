determineOddEvenCards([1, 2, 3, 1, 5, 6], "even");
// => 2
determineOddEvenCards([1, 2, 3, 1, 5, 6], "odd");
// => 4

function determineOddEvenCards(array, str) {
  let even_count = 0;
  let odd_count = 0;
  // for(const value of array) {
  //     if (value%2 === 0) {
  //         even_count++
  //     }
  //     else{
  //         odd_count++
  //     }
  // } ;
  array.forEach((value) => {
    if (value % 2 === 0) {
      even_count++;
    } else {
      odd_count++;
    }
  });
  if (str === "even") {
    return even_count;
  } else {
    return odd_count;
  }
}
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], "even"));
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], "odd"));
