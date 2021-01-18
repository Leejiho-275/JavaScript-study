const gameDatas = {
    randomNum: Math.floor(Math.random() * 100) + 1,
    count: 1,
    begin: 1,
    end: 100,
    chan: 5,
};

function chaNum(num) {
    if (num > 0)
        alert(`정답 기회가 ${gameDatas.chan}번 남았습니다.`);
    else
        alert(`정답 기회가 모두 소진되었습니다. 계속 문제를 풀어주세요.`);
}

function countAndChance() {
    gameDatas.count++;
    gameDatas.chan--;
}

function yesOrNo(num) {
    if (num > 0) {
        alert('YOU WIN!');
    } else {
        alert(`YOU LOSE!`);
    }
}

(function () {
    while (true) {
        //객체 디스트럭쳐링
        const {
            randomNum,
            count,
            chan,
        } = gameDatas;
        gameDatas.userNum = +prompt(`숫자를 입력하세요. [${gameDatas.begin} ~ ${gameDatas.end}]`);
        console.log(randomNum);
        if (randomNum < gameDatas.userNum) {
            alert('down!');
            gameDatas.end = gameDatas.userNum;
            countAndChance();
            chaNum(chan);
        } else if (randomNum === gameDatas.userNum) {
            alert(`정답입니다! ${count}번 만에 맞췄습니다.`);
            yesOrNo(chan);
            break;
        } else {
            alert('up!');
            gameDatas.begin = gameDatas.userNum;
            countAndChance();
            chaNum(chan);
        };
    }
}());

// /*
// # UP & DOWN 게임
// 1. 1~100사이의 정수 난수를 발생시켜 해당 값을 사용자가 맞추게 
//    하는 게임입니다.
// 2. 사용자가 입력한 값이 정답값보다 큰지 작은지 사용자에게 
// 알려주어 사용자가 지속해서 범위를 좁혀가며 답을 찾을 수 있도록 합니다.
// 3. 정답을 맞췄을 때 프로그램이 종료되도록 프로그램을 구성해보세요.
// 4. 사용자가 정답을 맞췄을 때 몇번만에 정답을 맞췄는지 
//    출력하는 로직을 추가하세요.
// */


// //게임에 필요한 데이터객체
// const gameDatas = {
//     secretNumber: Math.floor(Math.random() * 100) + 1,
//     count: 0,
//     countDown: 6,
//     min: 1,
//     max: 100
// };

// //게임 종료 조건을 판단하는 함수
// function isGameFinish() {
//     return inputAnswer();
// }

// //사용자의 입력데이터를 처리하는 함수
// function inputAnswer() {
//     gameDatas.answer = +prompt(`숫자를 입력하세요! [${gameDatas.min} - ${gameDatas.max}]`);
//     gameDatas.count++;
//     gameDatas.countDown--;
//     // console.log(gameDatas);
//     return checkInputNumber();
// }

// //사용자의 입력데이터를 검증하는 함수
// function checkInputNumber() {
//     //객체 디스트럭쳐링
//     const {secretNumber, answer, count, countDown} = gameDatas;
//     if (secretNumber === answer) {
//         alert(`정답입니다!! ${count}번만에 맞추셨군요!`);
//         checkCountDown(countDown);
//         return true;
//     } else if(secretNumber > answer) {
//         alert('UP!!');
//         gameDatas.min = answer;
//     } else {
//         alert('DOWN!!');
//         gameDatas.max = answer;
//     }
//     alertCountDown(countDown);
//     return false;
// }

// //사용자의 남은 카운트다운을 알려주는 함수
// function alertCountDown(countDown) {
//     if (countDown > 0) {
//         alert(`정답 기회 ${countDown}번 남음~~`);
//     } else {
//         alert('정답 기회 모두 소진! 계속 문제를 풀어주세요!');
//     }
// }

// //사용자가 정해진 카운트다운안에 맞췄는지 판별해주는 함수
// function checkCountDown(countDown) {
//     if (countDown >= 0) {
//         alert('You Win!!');
//     } else {
//         alert('You Lose!!');
//     }
// }

// //핵심 실행 로직
// (function () {
//     alert('[UP & DOWN 게임 - 1~100사이의 숫자를 맞춰보세요!]');
    
//     /*
//     while(true) {
//         if(isGameFinish()) break;
//     }
//     */
    
//     while(!isGameFinish()) {}

// }());
