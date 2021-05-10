210510 Note

Console(object).log(key) / built-in-function

1. 함수 Function : 자동화!

function sayHello(){
console.log('Hello')
}
sayHello();

console.log는 내가 쓰는걸 그대로 쓰는거야
argument-인자
함수는 인자를 받아. sayHello("nilas"): 우리가 주는 인자를 가지고 갈 수 있는거야.
function sayHello(argument){
console.log("hello", argument)
}
sayHeloo("Nicolas") : 니콜라스라는 값을 포테이토에 넣고 포테이토는 두번째 콘솔로그에 들어가는거지

✨
function sayHello(name,age){
console.log(`Hello ${name} you are ${age} years old`)
}

sayHello("Nicolas",15);
console.log("Hi")

console.log는 그냥 프린트해서 보여주는 값이고
return은 결과값을 저장했다가 가지고 나옴

2.JS DOM

내장함수
엘리먼트 선택 css처럼 가능
DOM (Document Object Module) 모든 자바스크립트는 객체가 될거고 .innerHTML등 여러개를 가짐
console.dir(title)
document.querySelector(".title", "#title") css와 사용방식 똑같이 가져감

3.Events / Eventhandlers
이벤트에 반응하기 위해 만들어진 자바스크립트- click/input/change/load/before.....etc
이벤트 함수에 handleResize() 요렇게 넣으면 ; 지금 바로 호출하라는 뜻
const title = document.querySelector("#title");

function handleClick(){
title.style.color = "blue";
}
title.addEventListener("click",handleClick);

4.if/else
if(조건 is 참){}
else if(){}
else{}

🟡피연산자
&& = & 둘다 참
=== = =
|| = or 둘중 하나만

> = / <=
> const age = prompt("How old are you?");

if (age >= 18 && age <= 21){
console.log("you can but you should not");
}else if(age>21){
console.log("go ahead!!!");
}
else{
console.log("you can't");
}

https://developer.mozilla.org/ko/docs/Web/Events

예시
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR ="#5f27cd"

function handleClick() {
const currentColor = title.style.color;
if (currentColor === BASE_COLOR){
title.style.color = OTHER_COLOR ;
}else{
title.style.color = BASE_COLOR ;
}
}

function init(){
title.style.color = BASE_COLOR;
title.addEventListener("mouseenter", handleClick)
}
init()
;

🟦FUNCTION PRACTICE🟦
대문자로 변수 선언하기 : BASE_COLOR ,
init 은 초기 값을 넣는다.
title.className
!== ~가 아니라면
""; empty
title.classList.add 추가하기
title.classList.remove 삭제하기
클래스2개 > 해당 클래스가 있는지 없는지 유무 확인하기 title.classList.contatins()
만약 ~를 갖고있지 않다면 > if(!hasClass)
title.classList.toggle() : 클래스를 체크해서 거기 있으면 add, 없으면 remove
