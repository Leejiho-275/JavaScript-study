
/*
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 "정답입니다."를
   틀린 답을 입력할 시 "오답입니다."를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/

var input, res, temp;

var yes = 0;
var no = 0;

while (true) {
    var randomInt1 = Math.floor(Math.random() * 100) + 1;
    var randomInt2 = Math.floor(Math.random() * 100) + 1;

    // +, - 선정
    var randomInt3 = Math.random();
    if (randomInt3 >= 0.5) {
        temp = '+';
        res = randomInt1 + randomInt2;
    } else {
        temp = '-';
        res = randomInt1 - randomInt2;
    }

    input = +prompt(`${randomInt1} ${temp} ${randomInt2} = ??`);
    if (input === res) {
        alert('정답입니다.');
        yes++;
    } else if (input === 0) {
        alert(`정답 횟수 : ${yes}, 오답 횟수 : ${no}`);
        break;
    } else {
        alert('오답입니다.');
        no++;
    }
}