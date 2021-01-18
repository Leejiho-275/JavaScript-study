// 객체 생성
var dog = {
    name: '뽀삐',
    kind: '시츄',
    age: 3,
    favorite: ['산책', '간식']
};
var cat = {
    name: '콩순',
    kind: '코숏',
    age: 2,
    favorite: ['낮잠', '캔참치', '캣타워']
};

console.log(typeof dog);

// 객체 프로퍼티 참조
console.log(dog.name);
console.log(cat.name);

console.log(dog.favorite);
console.log(cat.favorite[2]);

dog.favorite.push('꼬리흔들기');
console.log(dog);

// 프로퍼티 참조 2번째 방법
console.log(dog.age);
console.log(dog['age']); // 대괄호로 참조 시 문자열로 키를 만들어야 함

// 프로퍼티 값 수정
dog.age = 5;
console.log(dog);

cat.favorite[1] = '날생선';
console.log(cat.favorite);

console.log('======================\n');

// 프로퍼티 동적 추가
dog.owner = '김철수';
console.log(dog);

// 프로퍼티 삭제
delete dog.owner;
console.log(dog);

console.log('=====================\n');
// for ~ in
for (var key in cat) {
    // console.log(key);
    console.log(cat[key]);
}

var obj = {};
obj.x = 10;
obj.y = 10;

console.log(obj);

console.log('==================\n');

// 객체의 프로퍼티 존재 여부 확인
var flag = 'owner' in cat;
console.log(flag);

console.log('=====================\n');

var key = 'name';
if (!(key in cat)) {
    console.log(`해당 키는 없는 키입니다.`);
} else {
    console.log(`해당 키는 존재합니다.`);
}