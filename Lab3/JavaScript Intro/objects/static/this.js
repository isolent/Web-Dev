console.log("1:")

function makeUser() {
    return {
        name: "John",
        ref() {
        return this;
        }
    };
}

let userr = makeUser();

console.log( userr.ref().name ); 

console.log("2:")
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );


console.log("3:")
let ladder = {
    step: 10,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log( this.step );
      return this;
    }
};

ladder.up().up().down().showStep().down().showStep(); 