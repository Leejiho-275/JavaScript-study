// 게임에 필요한 데이터 객체

const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null,
    min: 1,
    max: 100,
    numberOfIcons: 100, // 현재 렌더링되어 있는 아이콘의 개수
};

// 숫자 아이콘 생성 함수
function makeNumberIcons() {
    const $numbers = document.getElementById('numbers');

    const $frag = document.createDocumentFragment();

    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $icon = document.createElement('div');
        $icon.textContent = i;
        $icon.classList.add('icon');
        $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);
}

// 숫자 아이콘 선택 함수
function clickNumberIcon(e) {
    $click = e.target.classList.add('clicked');
    $clicked = document.querySelector('.clicked');
    gameDatas.answer = +$clicked.textContent;
    console.log(gameDatas.answer);
}

// 선택 검증 함수
function checkAnswer() {
    const {
        secret,
        min,
        max,
        answer
    } = gameDatas;
    if (secret < answer) {
        const $Addanimation = document.getElementById('down');
        $Addanimation.classList.add('move');
    } else if (secret === answer) {
        alert('정답입니다.');
        return true;
    } else {
        const $Addanimation = document.getElementById('up');
        $Addanimation.classList.add('move');
    }
}

// 종료 조건 검증 함수
function isGameFinish() {
    document.addEventListener('click', clickNumberIcon);
    // return checkAnswer();
}

// 메인 로직을 실행할 즉시실행 함수
(function () {
    console.log(gameDatas.secret);
    console.log(gameDatas.answer);
    makeNumberIcons();
    isGameFinish();
    checkAnswer();
}())