
// 명시적 문자열 변환

var a = 10, b = 20;
// var result = String(a) + String(b);
// var result = a.toString() + b.toString();
var result = a + '' + b;
console.log(`result : ${result}`);

// 명시적 숫자 변환
console.log('================');

var m = '100', n = '3.14';
// var result = Number(m) + Number(n);
// var result = parseInt(m) + parseInt(n);
var result = +m + +n;
console.log(`result : ${result}`);

// 명시적 논리 변환
console.log('======================');

var ex1 = !!'hello';
var ex2 = Boolean(undefined);
console.log(ex1);
console.log(ex2);