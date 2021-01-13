var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    var userInput = prompt(`현재 멤버 [${tvxq}]\n삭제할 멤버 이름을 입력하세요.`);
    if (tvxq.includes(userInput)) {
        tvxq.splice(tvxq.indexOf(userInput), 1);

        confirm(`[${userInput}] : 정말로 삭제합니까?`);
        alert(`${userInput} 삭제 완료 \n${tvxq}`);
        break;
    } else {
        alert(`${userInput}는 잘못된 이름입니다.`);
    }
}