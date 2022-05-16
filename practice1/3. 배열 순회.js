/*********************************
* Practice 1-3) 배열 순회
**********************************/

let data = [1, 2, undefined, NaN, null, ""];

// 첫번째 방법 for 문
for (let i = 0; i< data.length; i++){
    console.log('for문에서:', data[i]);
}

// 두번째 방법 forEach 메소드
data.forEach(function(currValue){
    console.log('forEach에서:', currValue);
});

// 세번째 방법 for-in 문
// 단 for-in 문에는 문제점이 있음. 아래와 처럼 새로운 정보를 Array의 prototype에 등록하는 경우
// 배열 순회시 가지고 있지 않은 상위 객체의 정보까지 모두 가져와 버림!!
Array.prototype.getIndex = function(){ return "Array의 새로운 함수?"; };
for(let idx in data){
    console.log('for-in문에서:', data[idx]);
}
// 이와 같은 상황이 발생하지 않을 것이라고 보장 못하기 때문에 for-in은 되도록 쓰지말자.

// 네번째 방법 for-of 문 (ES6에서 추가)
// 파이썬의 for-in 문법이랑 똑같이 생각하면 될 것같다.
// 순회 가능한 객체의 데이터를 하나씩 가져온다.(string에도 사용 가능! 문자 단위로 가져옴.)
for(let value of data){
    console.log('for-of문에서:', value);
}
