
console.log(5 == 5);

// 타입은 다르지만 암묵적으로 같다고 인식
console.log(5 == '5');

console.log(5 === '5');

// 동등 비교는 결과 예측이 힘드므로 사용하지 않는 것을 추천
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');

// 일치비교에서는 NaN을 주의, NaN은 자신과 일치하지 않는 유일한 값이다.
console.log('=================');
console.log(NaN === NaN);
console.log(isNaN(NaN, NaN));

// 대소 비교
console.log('========================');
var x = 10;
console.log(x > 5);
console.log(x <= 10);

// 문자열 비교
console.log('=======================');

console.log('apple' === 'APPLE'); //false

console.log('ace' < 'ade'); //true
console.log('복숭아'<'감자'); //false

console.log('ZEBRA' > 'apple'); // false

/*
문자열의 대소비교는 같은 형태(대문자, 소문자, 한글, 일본어)에서는
사전에서 뒤에 나오는 단어일수록 크다.

단 유니코드 숫자 크기로 비교하므로
영문 대문자 < 영문 소문자 < 한글
*/