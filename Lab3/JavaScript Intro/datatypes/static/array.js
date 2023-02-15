console.log("1:")
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log( fruits.length ); 

console.log("2:")

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log( styles.shift() );
styles.unshift("Rap", "Reggae");

console.log(styles);

console.log("3:")
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2]();

console.log("4:")

function findSum() {
    let numbers = [];
    while (true) {
      let value = prompt("Number?", 0);
      if (value === "" || value === null || !isFinite(value)) break;  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}
console.log( findSum() );

console.log("5:")
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
  console.log( getMaxSubSum([-1, 2, 3, -9]) );
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
  console.log( getMaxSubSum([-2, -1, 1, 2]) );
  console.log( getMaxSubSum([100, -9, 2, -3, 5]) );
  console.log( getMaxSubSum([1, 2, 3]) ); 
  console.log( getMaxSubSum([-1, -2, -3]) );  