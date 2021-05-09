210509 Note

JavaScript? 웹에 쓰이는 하나뿐인 '언어' + Frontend
ECMA Script? 안내문'specification' 버전이 뭐 5,6,2020 등등이 있지만 버전따윈 필요없어! 우린 컨셉을 배운다. 니꼬는 구식의 정보를 알려주진 않을거다!
Vanila JS? 자바스크립트의 한 종류로 라이브러리가 없는 것. 조리가 되지 않은 날것의 자바스크립트.

Variable변수
라인(expressions)은 한 줄에 사용해야 한다.
마무리는 ;(세미콜론)
Create - Initialize : let/const - Use 할땐 let/const 쓰지않음
자바스크립트는 위에서 아래로 코드를 읽음

*let: 변할 수 있음
*const: 상수- 변하지 않음 💫 요걸 주로 쓰자!
주석처리 방법 : // (<!--html&css-->) , // javsScript long <!-- /* */ -->

\*DataType : Sting(""),Boolean(T/F), Number, Float

\*Data Organizing

1. Array 리스트같이 저장하는 것 💥DB
   const daysOfWeek = ["mon", "tue", "wed", true, 2, 2.1432]
   만약 3번째를 알고 싶으면 console.log(daysOfWeek[2]) :컴퓨터는 0부터 세기 시작함
   undefined : 값 없음

2. Object 각value에 값을 줄 수 있음, 데이터 레이블링, 선 변수: 후 벨류 💥데이터 섞기 가능
   const jisooInfo = {name:"Jisoo", age:33, gender:"Female", isPretty:true}
   만약 나이만 알고싶다면 console.log(jisooInfo.age);
   jisooInfo안에 있는 값을 바꿀 수 있다 --> jisooInfo.age=30;
   -
3. Object안에 Array를 넣을 수 있음, object안에 object넣을 수 있음 (반대도 가능)
   const jisooInfo ={favMusicians : ["hi", "blackpink","itzy"], favFood:[{name:"kimchi", fatty:false}, {name:"chessburger", fatty:ture}]};

🌈 콤마 빼먹지 말기
🌈 스트링 쓸때 "" 요거 꼭 쓰기
🌈 콘솔로그를 읽기
