
/*
- 요구사항
1. 사용자는 정수 2개를 각각 입력할 수 있어야 함
2. 프로그램은 2번째 정수를 입력하고 엔터를 누르면 1번째 정수부터
   2번째 정수까지의 총합(2번째 정수포함)을 출력해야 함.
3. while을 사용할 것
*/

var num1 = +prompt('첫번째 정수를 입력하세요');
var num2 = +prompt('두번째 정수를 입력하세요');
var total = 0, save = num1;

while (num1 <= num2) {
    total += num1;
    num1++;
}

alert(`${save}에서 ${num2}까지의 총합은 ${total}입니다.`);

/*
작은 수에서 큰수의 총합을 출력
*/

var num3 = +prompt('첫번째 정수를 입력하세요');
var num4 = +prompt('두번째 정수를 입력하세요');
var total2 = 0;

if (num3 <= num4) {
    var save2 = num3;
    while (num3 <= num4) {
        total2 += num3;
        num3++;
    }
    alert(`${save2}에서 ${num4}까지의 총합은 ${total2}입니다.`);
} else {
    var save2 = num4;
    while (num4 <= num3) {
        total2 += num4;
        num4++;
    }
    alert(`${save2}에서 ${num3}까지의 총합은 ${total2}입니다.`);
}

/*
if (num1 > num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
}
*/