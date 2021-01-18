
// indexOf() : 배열 요소의 인덱스를 알려줌
var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

var idx = foods.indexOf('김말이');
console.log(`찾은 인덱스 : ${idx}번`);
// 탐색 실패 시 -1을 가져옴
var idx1 = foods.indexOf('없음');
console.log(`찾은 인덱스 : ${idx1}번`);

// includes() : 배열 요소의 존재 여부 확인
var result = foods.includes('닭꼬치');
console.log(`탐색결과 : ${result}`);
var result1 = foods.includes('none');
console.log(`탐색결과 : ${result1}`);

console.log('=====================\n');
// slice() : 배열을 잘라서 복사함

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var sliceArr = arr.slice(3, 7);
console.log(sliceArr);

var slicedFoods = foods.slice(1, 3);
console.log(slicedFoods);

slicedArr = arr.slice(6);
console.log(slicedArr);

// 원본 배열은 변화 없음
console.log(arr);

console.log('===================\n');
// reverse() : 배열을 역순으로 배치함

// reverse는 원본을 변화시킴
/*
arr.reverse();
console.log(arr);
*/

// 원본을 변화시키고 싶지 않으면 복사본을 만들어서 사용
var copyArr = arr.slice(0);
copyArr.reverse();
console.log(copyArr);
console.log(arr);

// join() : 배열의 요소들을 연결한 문자열로 변환

// join메서드에 구분자 문자열을 넣으면 오소 사이에 삽입. 기본값은 콤마
var foodStr = foods.join('랑 ');
console.log(foodStr);