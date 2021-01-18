
/*
while (true) {
    var ranNum = Math.floor(Math.random() * 6);
    console.log(`랜덤 값 : ${ranNum}`);

    if (ranNum === 3) {
        console.log('반복문 종료');
        break;
    }
}
*/

var total = 0;
while (true) {
    var num = prompt('숫자를 입력하세요.');
    if (num === '그만') {
        break;
    }
    total += +num;
}

alert(`입력한 숫자의 총합 : ${total}`);