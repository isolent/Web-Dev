console.log("1:")
let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() ); 


console.log("2:")
function Calc() {
    this.read = function() {
        this.a = prompt('value of a', 0);
        this.b = prompt('value of b', 0);
    };

    this.sum = function() {
        return +(this.a) + +(this.b);
    };

    this.mult = function() {
        return this.a * this.b;
    };
}

let calculator = new Calc();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Multiplication=" + calculator.mult() );

console.log("3:")
function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(10);
  accumulator.read();
  accumulator.read();
  console.log(accumulator.value);