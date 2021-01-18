
var foods = ['볶음밥', '닭강정', '피자'];

console.log(foods);

var lastElement = foods.pop();
console.log(`제거된 요소 : ${lastElement}`);
console.log(foods);

foods.push('파스타');
foods.push('족발');
console.log(foods);

foods.shift();
console.log(foods);

foods.unshift('떡볶이');
console.log(foods);
