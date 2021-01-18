let count = 1;
const randomNum = Math.floor(Math.random() * 100) + 1;
let begin = 1,
    end = 100,
    chan = 5;

function chaNum(num) {
    if (num > 0)
        alert(`정답 기회가 ${chan}번 남았습니다.`);
    else
        alert(`정답 기회가 모두 소진되었습니다. 계속 문제를 풀어주세요.`);
}

function countAndChance() {
    count++;
    chan--;
}

console.log(randomNum);
alert(`1 ~ 100 사이에서 선택된 숫자를 맞춰보세요!`);

while (true) {
    let userNum = +prompt(`숫자를 입력하세요. [${begin} ~ ${end}]`);
    console.log(randomNum);
    if (randomNum < userNum) {
        alert('down!');
        end = userNum;
        countAndChance();
        chaNum(chan);
    } else if (randomNum === userNum) {
        alert(`정답입니다! ${count}번 만에 맞췄습니다.`)
        if (chan > 0) {
            alert('YOU WIN!');
        } else {
            alert(`YOU LOSE!`);
        }
        break;
    } else {
        alert('up!');
        begin = userNum;
        countAndChance();
        chaNum(chan);
    };
}