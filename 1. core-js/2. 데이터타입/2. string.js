
var greeting;
greeting = 'hello';
greeting = "안녕";
greeting = `hi`;

console.log(typeof greeting);

var exStr = '그는 나에게 "위험해"라고 말했다.';

console.log(exStr);

exStr = "Let's go!";

exStr = `"Let's go! "together"`;
console.log(exStr);

// 템플릿 리터럴 (``)

console.log('==========================');

// var template = '<ul>\n\t<li>\n\t\t<a herf="#">Home</a>\n\t</li>\n</ul>'
var template = `<ul>
    <li>
            <a herf="#">Home</a>
    </li>
</ul>`;
console.log(template);

console.log('==========================');

var month = 4;
var day = 5;
var anniversary = '식목일';

//console.log(month + '월 ' + day + '일은 ' + anniversary + '이에요');
console.log(`${month}월 ${day}일은 ${anniversary}이에요`);