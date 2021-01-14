function calcDivisor(num) {
    var n = 1;
    var temp = [];
    var a = 0;

    while (n <= num) {
        if (num % n === 0) {
            temp[a] = n;
            a++;
        }
        n++;
    }
    return temp.length;
}

var divCount = calcDivisor(10);
console.log(`약수의 개수 : ${divCount}`);