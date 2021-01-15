const pi = 3.14159;

// pi=6.66;
console.log(`원주율 : ${pi}`);

let x;
x = 10;
console.log(x);

// const y;

console.log('===========================\n');

const TAX_RATE = 0.1;

let preTaxPrice = 100; // 세전가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE); // 세후가격

// const 와 객체(배열, 객체 등)
const person = {
    name: 'park'
};
/*
person = {
    name: 'lee'
} // error
*/
person.name = 'kim';
person.age = 20;
person.isStudent = true;
delete person.isStudent;
console.log(person);

const arr = [1, 2, 3];
arr[1] = 200;
console.log(arr);

// arr = ['d', 'd']; // error