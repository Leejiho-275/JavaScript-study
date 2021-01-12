
var week = ['월', '화', '수', '목', '금', '토', '일'];


for (var i = 0; i < week.length; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(`${week[i]}요일`);
}
console.log('\n');

for (var day of week) {
    console.log(`${day}요일`);
}