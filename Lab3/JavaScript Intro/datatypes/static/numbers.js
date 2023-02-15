console.log("1:")
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

console.log( a + b );

console.log("2:")
console.log( 6.35.toFixed(1) );

console.log("3:")

// function read(){
//     let n;

//     while(!isFinite(n)){
//         n = prompt("Enter the  number:", 0)
//     }

//     if (n === null || num ==='') 
//         return null;
//     return +n;
// }
// console.log((`Read: ${read()}`))


console.log("4:")
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}

console.log("5:")
function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );

console.log("6:")
// function randomInteger(min, max) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
// }

// randomInteger(4, 7)