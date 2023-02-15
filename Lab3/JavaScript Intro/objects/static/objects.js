console.log("1:")
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
// delete user.name;
console.log(user)


console.log("2:")
let schedule = {};
function isEmpty (obj) {
  return Object.keys(obj).length === 0
}
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));


console.log("3:")
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
  
let sum = 0;
for (let key in salaries) {
sum += salaries[key];
}
console.log(sum); 


console.log("4:")
function multiplyNumeric(obj){
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
          console.log(obj[key] *= 2);
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
   