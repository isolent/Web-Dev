console.log("first")
let i = 3;
while (i) {
  console.log( i-- );
}

console.log("second")
let n = 0;
while (++n < 5) console.log( n );

console.log("third")
for (let i = 0; i < 5; i++) console.log( i );

console.log("forth")
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }

console.log("fifth")
let m = 0;
while (m < 3) {
    console.log( `number ${m}!` );
  m++;
}

console.log("sixth")
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


console.log("seventh")
let l = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log( i ); // a prime
}