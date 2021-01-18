/*
function showNumbers(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

function showOddNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 1) console.log(i);
    }
}
showOddNumbers(10);

function showOddNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) console.log(i);
    }
}
*/

// 콜백 함수
function showNumbers(n, callback) {
    for (var i = 1; i <= n; i++) {
        callback(i);
    }
}

function logOdd(i) {
    if (i % 2 === 1) console.log(i);
}

function logEven(i) {
    if (i % 2 === 0) console.log(i);
}

// showNumbers(20, logEven);

showNumbers(20, function (i) {
    if (i % 3 === 0) console.log(i);
})

console.log('=====================\n');

// 숫자배열을 전달하면 해당 배열을 조건부로 필터링하여 복사배열을 만들어주는 함수

function filter(array, callback) {
    var filteredArray = [];
    for (var i of array) {
        if (callback(i)) filteredArray.push(i);
    }
    return filteredArray;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
var result = filter(numbers, function (n) {
    return n % 2 === 0;
});
*/

var result = filter(numbers, n => n % 3 === 0);

console.log(result);