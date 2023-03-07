let a : number;
a = 2;
// a = 'hello'

interface user {
    name : string;
    age: number;
}


let user: user = {
    name: 'User1',
    age: 18
};

console.log(user.age);
 
function sum (n1: number, n2: number){
    return n1+n2;
}

console.log(sum(2, 3))

function greeting(fname: string) {
    console.log(`hi ${fname}`);
}

greeting('KBTU');