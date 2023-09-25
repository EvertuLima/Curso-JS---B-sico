// (a, b) => {
//     return a+b;
// }

// (a, b) => a + b;

let a = 5;
let b = 10;

let c = (num1, num2) => num1 + num2;

console.log(c(a,b))

let list = ['a', 'b', 'c', 'd'];

let list2 = list.filter(list => list !== 'a');

console.log(list2);

let animals = [
    { name: 'Turca', type: 'Dog', age: 12 },
    { name: 'Tom', type: 'Cat', age: 3 },
    { name: 'Frida', type: 'Dog', age: 16},
    { name: 'Bob', type: 'Horse', age: 13},
];

let animalsVelhos = animals.filter((animal) => animal.age > 10)

console.log(animalsVelhos)

// NÃO USAR ARROW

let pessoa = {
    nome : "Everton",

    sayName: () => {
       console.log(this.nome)
    }
}
pessoa.sayName();

// let btn = document.getElementById('btn');

// btn.addEventListener('click',  function(){
//    this.classList.toggle('classe');
// });

document.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementById('btn');
  
    btn.addEventListener('click', function() {
      this.classList.toggle('classe');
    });
  });