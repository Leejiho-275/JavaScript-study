
/*
for (var num = 2; num < 10; num++) {
    console.log(`==================\n구구단 ${num}단\n==================`);
    for (var n = 1; n <= 9; n++) {
        console.log(`${num} x ${n} = ${num * n}`);
    }
}
*/

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 2; k++) {
            console.log(`${i} ${j} ${k}: 안녕하세요`);
        }
    }
}