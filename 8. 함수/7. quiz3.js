function CalcBMI(height, kg) {
    var m = height * 0.01;
    var bmi = kg / (m * m);
    if (bmi >= 25.0) {
        console.log('당신은 과체중입니다.');
    } else if (bmi <= 18.5) {
        console.log('당신은 저체중입니다.');
    } else {
        console.log('당신은 정상체중입니다.');
    }
    return bmi.toFixed(2);
}
var height = 178.4,
    kg = 78.2;
var myBMI = CalcBMI(height, kg);
console.log(`키 -> ${height}cm, 체중 -> ${kg}kg의 체질량지수는 ${myBMI}입니다.`);

// var height = 178.4,
//     kg = 78.2;
// var m = height * 0.01;
// var bmi = kg / (m * m);
// if (bmi >= 25.0) {
//     console.log('당신은 과체중입니다.');
// } else if (bmi <= 18.5) {
//     console.log('당신은 저체중입니다.');
// } else {
//     console.log('당신은 정상체중입니다.');
// }