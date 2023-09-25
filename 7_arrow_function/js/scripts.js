// (a, b) => {
//     return a+b;
// }

// (a, b) => a + b;

let a = 5;
let b = 10;

let c = (num1, num2) => a + b;

console.log(c(a,b))

let list = ['a', 'b', 'c', 'd'];

let list2 = list.filter(list => list !== 'a');

console.log(list2);