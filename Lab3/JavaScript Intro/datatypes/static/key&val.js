console.log("1:")
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) ); // 650
  

console.log("2:")

function count(obj) {
    console.log( Object.keys(obj).length);
  }
  let user = {
    name: 'John',
    age: 30,
    id: 100
  };
  
    count(user); 