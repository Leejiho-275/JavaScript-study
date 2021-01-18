
/*
- 요구사항
1. 프로그램 실행 시 2~9단 중 무작위로 구구단이 등장하게 하세요.
2. for문과 while문으로 각각 구현하세요.
*/
var randomNum = Math.floor(Math.random() * 8) + 2;

console.log(`==================\n랜덤 구구단 ${randomNum}단\n==================`);
for (var n = 1; n <= 9; n++) {
    var res = randomNum * n;
    console.log(`${randomNum} x ${n} = ${res}`);
}

console.log('\n=================\n');

var randomNum2 = Math.floor(Math.random() * 8) + 2;
console.log(`==================\n랜덤 구구단 ${randomNum2}단\n==================`);

var n2 = 1;
while (n2 <= 9) {
    var res = randomNum2 * n2;
    console.log(`${randomNum2} x ${n2} = ${res}`);
    n2++;
}