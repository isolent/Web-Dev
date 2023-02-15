console.log("1:")
function camelize(str) {
    console.log( str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('')); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }
  camelize("web-development-spring")

console.log("2:")
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    console.log( arr.filter(item => (a <= item && item <= b)));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  console.log( filtered );
  
  console.log( arr );

console.log("3:")
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  
  let a = [5, 3, 8, 1];
  filterRangeInPlace(a, 1, 4); // removed the numbers except from 1 to 4
  console.log( a );

console.log("4:")
let array = [5, 2, 1, -10, 8];

array.sort((a, b) => b - a);
console.log( array );

console.log("5:")
function copySorted(arr) {
    console.log( arr.slice().sort());
  }
  
  let s = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(s);
  
  console.log( sorted );
  console.log( s );

console.log("6:")
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        console.log( NaN);
      }
  
      console.log( this.methods[op](a, b));
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

console.log("7:")
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log( names ); 

console.log("8:")
let johnn = { name: "John", surname: "Smith", id: 1 };
let petee = { name: "Pete", surname: "Hunt", id: 2 };
let maryy = { name: "Mary", surname: "Key", id: 3 };

let uusers = [ john, pete, mary ];

let usersMapped = uusers.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName );

console.log("9:")
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let sort_age = [ pete, john, mary ];
  
  sortByAge(sort_age);
  
  console.log(sort_age[0].name); 
  console.log(sort_age[1].name); 
  console.log(sort_age[2].name);

console.log("10:")
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let ar = [1, 2, 3];
  shuffle(ar);
  console.log(ar);

console.log("11:")

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  
  let average_age = [ john, pete, mary ];
  
  console.log( getAverageAge(average_age ) );

console.log("12:")
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

console.log( unique(strings) );

console.log("13:")
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

  let us = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usById = groupById(us);
  