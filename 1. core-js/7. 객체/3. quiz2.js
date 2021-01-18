var user = {
    kim1234: 'kkk1234',
    lee4567: 'lll4567',
    park9876: 'ppp9876'
};
console.log(user.kim1234);

while (true) {
    var userId = prompt(`아이디를 입력하세요`);
    if (userId in user) {
        var userPw = prompt(`비밀번호를 입력하세요`);
        // var realPw = user[userId];
        if (userPw === user[userId]) {
            alert(`로그인 성공!`);
            break;
        } else {
            alert(`비밀번호가 틀렸습니다.`);
        }
    } else {
        alert(`존재하지 않는 회원입니다.`);
    }
}