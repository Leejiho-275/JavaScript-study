// 일정 데이터가 들어 있는 배열 선언
const todos = [];

// 새로운 할 일의 id값을 만들어주는 함수
function makeNewId() {
    if (todos.length > 0) {
        const lastIndex = todos.length - 1;
        return todos[lastIndex].id + 1;
    } else {
        return 1;
    }
}

// 화면에 추가할 todo-list-item 노드를 생성하는 함수
function makeNewToDoNode(newToDo) {
    const $itemLi = document.createElement('li');
    const $label = document.createElement('label');
    const $div1 = document.createElement('div');
    // 수정 이벤트
    const $div2 = document.createElement('div');

    // label태그 작업
    $label.classList.add('checkbox');
    $label.innerHTML = `<input type="checkbox" >
    <span class="text">${newToDo.text}</span>`;

    // div 태그 작업 - 수정
    $div1.classList.add('modify');
    $div1.innerHTML = '<span class="lnr lnr-undo"></span>'

    // div 태그 작업 - 삭제
    $div2.classList.add('remove');
    $div2.innerHTML = `<span class="lnr lnr-cross-circle"></span>`;

    // li 태그 작업
    $itemLi.dataset.id = newToDo.id;
    $itemLi.classList.add('todo-list-item');
    $itemLi.appendChild($label);
    $itemLi.appendChild($div1); // 수정 이벤트
    $itemLi.appendChild($div2);

    return $itemLi;
}

// 할 일 추가 처리 함수
function insertToDoData() {
    const $todoText = document.getElementById('todo-text');
    const $todoInsert = $todoText.parentElement;
    // 사용자가 입력을 하지 않았을 때 함수를 종료시켜야 함
    // trim(): 문자열의 앞 뒤 공백을 제거
    if ($todoText.value.trim() === '') {
        $todoInsert.classList.add('error');
        $todoText.setAttribute('placeholder', '필수 입력사항입니다!');
        $todoText.value = '';
        return;
    }
    $todoInsert.classList.remove('error');

    // 1. todos 배열에 객체를 셋팅
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };

    // 2. todos 배열에 해당 객체를 삽입
    todos.push(newToDo);

    // 3. 추가된 데이터를 화면에 렌더링
    const $todoList = document.querySelector('.todo-list');
    $todoList.appendChild(makeNewToDoNode(newToDo));

    // 4. 입력 완료 후 잔존 문자열 제거
    $todoText.value = '';
}

// 배열 인덱스 탐색 함수(dataId이용)
function findIndexByDataId(dataId) {
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        if (dataId === todo.id) return i;
    }
    return null;
}

// 체크 박스 이벤트의 세부처리 수행함수
function changeCheckState($checkbox) {
    // 1. label에 클래스 checked를 추가해야 한다.
    // 이 함수는 label 노드를 가지고 있어야 한다.
    const $label = $checkbox.parentElement;
    $label.classList.toggle('checked');

    //  2. 실제로 서버가 있다면 서버에도 체크 상태를 반영시켜야 함.
    // 배열의 done 값을 변경해야 함.
    const $li = $label.parentElement;
    const dataId = +$li.dataset.id;

    // 3. 배열을 탐색하여 data-id와 일치하는 id프로퍼티를 가진 객체의 인덱스를 얻어옴.
    const foundIndex = findIndexByDataId(dataId);

    // 4. 찾아낸 인덱스로 배열에서 해당 객체에 접근한 뒤 done을 수정
    todos[foundIndex].done = !todos[foundIndex].done;
};

// 할 일 삭제 처리 수행 함수
function removeToDoData($delSpan) {
    // 1. DOM 요소 삭제
    const $delLi = $delSpan.parentElement.parentElement;

    document.querySelector('.todo-list').removeChild($delLi);

    // 2. 배열에서도 삭제
    const dataId = +$delLi.dataset.id;
    const foundIndex = findIndexByDataId(dataId);
    if (foundIndex !== null) {
        todos.splice(foundIndex, 1);
    }
}
// 수정 이벤트
function modifyToDoData($modifySpan) {
    const $modifyLi = $modifySpan.parentElement.parentElement;
    console.log($modifyLi);
}

// 메인 실행 함수
(function () {
    // 할 일 추가 이벤트
    const $addBtn = document.getElementById('add');

    $addBtn.addEventListener('click', function (e) {
        e.preventDefault(); // 버튼의 서버전송 기능을 막음

        insertToDoData();
    });

    // 할 일 완료 체크 이벤트
    const $todoList = document.querySelector('ul.todo-list');

    $todoList.addEventListener('change', function (e) {
        if (!e.target.matches('.todo-list label.checkbox input[type=checkbox]')) {
            return;
        }

        changeCheckState(e.target);
    });

    // 할 일 삭제 이벤트
    $todoList.addEventListener('click', function (e) {
        if (!e.target.matches('.todo-list div.remove span')) {
            return;
        }
        removeToDoData(e.target);
    })

    // 할 일 수정 이벤트
    $todoList.addEventListener('click', function (e) {
        if (!e.target.matches('.todo-list div.modify span')) {
            return;
        }
        modifyToDoData(e.target);
    })
}());