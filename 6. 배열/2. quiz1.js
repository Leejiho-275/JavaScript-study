
/*
scores라는 배열 변수에 학생들의 수학점수 8개가 저장됩니다.
점수는 임의로 설정합니다.

- 요구사항
1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
   콘솔에 출력하세요.
2. 학생들의 점수가 추가되었을 때 코드를 건드리지 않아도 자동으로
   총점, 평균이 갱신되어야 합니다.
*/

var scores = [20, 30, 40, 50, 60, 70, 80, 90];

var total = 0, avg = 0;

scores[scores.length] = 100;
/*
for (var i = 0; i < scores.length; i++) {
    total += scores[i];
}
*/
for (var num of scores) {
   total += num;
}
avg = total / scores.length;
// 소수점 길이 제한
var prettierAvg = Math.round(avg * 100) / 10 ** 2;

console.log(`학생 총점 : ${total}점, 학생 평균 : ${avg}점`);