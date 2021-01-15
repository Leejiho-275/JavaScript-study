// const randomNum = Math.floor(Math.random() * 100) + 1;
let conunt = 0;

// let userNum = +prompt(`1~100사이의 수를 입력하세요.`);
while (true) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    let userNum = +prompt(`1~100사이의 수를 입력하세요.`);
    if (randomNum < userNum) {
        alert('down!');
        userNum = +prompt(`1~100사이의 수를 입력하세요.`);
    } else if (randomNum > userNum) {
        alert('up!');
        userNum = +prompt(`1~100사이의 수를 입력하세요.`);
    } else if (randomNum === userNum) break;
    count++;
}
alert(`${count}번 만에 맞췄습니다.`);