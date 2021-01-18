
// 2차원 배열
// 수학점수 관리
var mathScores = [50, 60, 20, 80];

// 4과목(국영수탐) 점수들을 관리
var scores = [
    [69, 74, 93, 71],
    [15, 38, 95, 74],
    [50, 60, 20, 80],
    [100, 37, 94, 77]
];

console.log(scores[1][2]);

console.log('==================\n');

/*
전체과목 평균
전체국어 평균
전체영어 평균
첫번째 학생 평균점수
두번째 학생 평균점수
*/

var ourClassScoresAvgTotal = 0;

// 출석번호 시퀀스
var stuNum = 1;

// 국어점수 총점 변수
var subjectKorTotal = 0;

for (var scoreArray of scores) {

    // 한명의 학생의 점수배열(scoreArray)에서 0번 인덱스만 추출해서 누적
    subjectKorTotal += scoreArray[0];

    var eachTotal = 0; // 학생 1명의 총점
    for (var score of scoreArray) {
        eachTotal += score;
    }
    var eachAvg = eachTotal / scoreArray.length;
    ourClassScoresAvgTotal += eachAvg;
    console.log(`${stuNum}번 학생 : 총점 - ${eachTotal}점, 평균 - ${eachAvg}점`);
    stuNum++;
}

var ourClassAvg = ourClassScoresAvgTotal / scores.length;
var subjectKorAvg = subjectKorTotal / scores.length;
console.log(`반 평균 : ${ourClassAvg}점`);
console.log(`국어 평균 : ${subjectKorAvg}점`);

// 3차원 배열
var arr3d = [
    [
        [1, 2, 3], [4, 5, 6], [7, 8, 9]
    ],
    [
        [10, 11, 12], [13, 14, 15], [16, 17, 18]
    ],
    [
        [19, 20, 21], [22, 23, 24], [25, 26, 27]
    ],
]
console.log('==========\n');
console.log(arr3d[0]);