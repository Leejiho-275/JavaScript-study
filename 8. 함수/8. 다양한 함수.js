// 함수 리터럴, 함수 표현식

var add = function (num1, num2) {
    return num1 + num2;
};
console.log(typeof add);
console.log(add(4, 7));

console.log('=======================\n');
// 즉시 실행 함수

var result = (function (x, y) {
    console.log(`x + y = ${x+y}`);
    return x - y;
}(10, 20));

console.log(result);

(function (name) {
    console.log(`${name}님 안녕하세요.`);
}('고길동'));

console.log('=======================\n');
// 재귀 함수
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
}
// countdown(5);

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

console.log('=======================\n');
// 중첩 함수

function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y);
    }
    inner();
}
outer();