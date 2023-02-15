console.log("first")
function checkAge(age) {
    if (age > 18) {
      return confirm('ok');
    }
    // ... no need to write else statement
    return confirm('you are not 18');
}

checkAge(20);

// console.log("second")
// function checkAge2(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }
// checkAge2(20);

console.log("third")
function min(a, b) {
    if (a < b) {
        console.log( a);
    } else {
        console.log( b);
    }
}

min(4, 5);

console.log("forth")

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
  } else {
    console.log( pow(x, n) );
  }