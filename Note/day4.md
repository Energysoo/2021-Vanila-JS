0512 Wed

TodoList만들기!

1. loadToDos : localStorage.getItem() <- 요기에 들어가는건 키 값
2. handleSubmit(event)
   event.preventDefault(event) <- 기본 새로고침 디폴트 액션 없애기

document.creatElement("li") : html에 js로 태그 생성 가능
li.appendChild(span) : 내부에 넣고 넣고 넣는것 (예시는 리스트아이템에 span넣기 )

const toDos= []
해야할일을 생성했을때 그게 이 어레이에 추가될 수 있도록만들기- 빈 어레이 만들기
그러고 const toDoObj = {text:text, id:toDos.length+1} 어레이에서 추가하고자 하는 형식 지정한 후
toDos.push(toDoObj) : 만든 투두 오브젝트를 투두 어레이에 밀어넣기

function saveToDos(){
localStorage.setItem(TODOS_LS, toDos)
}
그런데 이렇게 저장하니까 자바스크립트에 데이터 저장이 어려움
자바스크립트는 로컬 스토리지에 있는 모든 데이터를 스트링으로 저장하려고 함 >> JSON.stringify(toDos)
parse 는 다시 스트링에서 다시 데이터타입으로 변경

parsedToDos.forEach() : ForEach 기본적으로 함수를 실행하는데 array에 담겨있는것들 각각에 함수 실행

\*\*DELETE
const btn = event. target :: 무엇이 선택됐는지 html로 보여줌
event.target.parentNode : 누가 선택됐는지를 id값 포함 볼 수 있음
toDoList.removeChild(li) : 지우고 싶을 때  
toDos.filter : 함수 하나를 실행시키는데 forEach처럼 함수를 실행시키고, 그 값을 만족시키는 아이템들만 가지고 새로운 어레이를 만듬 >> toDos.filter(function(toDo){return toDo.id !== li.id})
그런데 여기에서 데이터 타입이 달랐기 때문에 스트링을 일반 숫자로 돌리기 위해 pareseInt 사용
