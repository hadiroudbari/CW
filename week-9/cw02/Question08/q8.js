const sum = function(arr){

const even= arr.filter( number=> number%2===0 )
const result=even.reduce( (sum,number)=>sum+number,0 )
return result;
}
let a=[1,2,3,4,5,6,7,8,9,10];
console.log(sum(a));