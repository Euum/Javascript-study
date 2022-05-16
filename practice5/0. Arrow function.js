/*********************************
* Practice 5-0) Arrow function
**********************************/


// setTimeout 함수의 callback 함수를 arrow function으로 넘겨줌.
setTimeout(() => {
    console.log("settimeout arrow function");
}, 1000);
console.log("setTimeout ready");



// 배열의 값들을 배수 처리하여 만듦.
// 기존 방식의 문제점은 보기에 너무 길다는 점.
// const newArr = [1,2,3,4,5].map(function(value){
//     return value * 2;
// });

// 기존 방식을 아래의 Arrow function으로 바꾸면 더 짧게 작성 가능.
// 주의: 리턴값을 바로 반환할 때는 중괄호가 아닌 소괄호로 표기할 것.
//       또는, 한 줄 이상의 문장을 작성하지 말 것.
const newArr = [1,2,3,4,5].map((v) => (v * 2));
console.log(newArr)
