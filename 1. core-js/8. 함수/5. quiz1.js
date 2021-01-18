function calcNumbersTotalAndAverage(...numbers) {
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    var avg = total / numbers.length;
    return {
        total,
        avg
    };
}

var res = calcNumbersTotalAndAverage(90, 80, 100, 90);
console.log(`총합 : ${res.total}`);
console.log(`평균 : ${res.avg}`);