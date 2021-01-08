
// 1~10 까지의 총합

var total = 0;

for (var n = 1; n <= 10; n++) {
    total += n;
}
console.log(`총합 : ${total}`);
console.log('=======================');

// 7~100사이의 7의 배수 모두 출력

for (var num = 7; num <= 100; n += 7) {
    console.log(`while 종료 후 num: ${num}`);
}

// 1~100사이의 13의 배수 모두 출력
console.log('===============');
for (var num = 1; num <= 100; num++) {
    if (num % 13 === 0) {
        console.log(num);
    }
}

console.log('==================');
// 1~100 사이의 정수 중 6의 배수이면서 12의 배수가 아닌 수 출력

for (var num = 1; num <= 100; num++) {
    if (num % 6 === 0 && num % 12 !== 0) {
        console.log(num);
    }
}

console.log('==================\n');

// 1~4000 사이의 정수 중 9의 배수의 개수를 출력

var count = 0;
for (var num = 1; num <= 4000; num++) {
    if (num % 9 === 0) {
        count++;
    }
}
console.log(`1~4000 사이의 정수 중 9의 배수의 개수는 ${count}입니다.`);