
var num = [];
var input, total = 0;

while (true) {
    input = prompt(`숫자를 입력하세요.\n그만두시려면 '그만'을 입력하세요`);
    if(input==='그만') break;
    num.push(+input);
}
console.log(num);
/*
for (var n = 0; n < num.length; n++) {
    total += num[n];
}
*/
for (var n of num){
    total+=n;
}
alert(`입력했던 숫자의 총합 : ${total}`);