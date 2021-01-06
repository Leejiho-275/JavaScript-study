
var x = 10;

x += 5;
x -= 3;
x *= 2;

x /= 4; // x:6
console.log(`x: ${x}`);
x %= 4; // x:2
console.log(`x: ${x}`);
x **= 3; // x:8
console.log(`x: ${x}`);

// ++연산이 +=1보다 빠름