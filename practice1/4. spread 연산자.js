/*********************************
* Practice 1-4) spread 연산자 (펼침 연산자)
**********************************/

// arr과 newArr은 다른 메모리 영역의 다른 데이터다.
// spread operator(...X) 는 뒤에 오는 순회 가능한 X의 데이터를
// 말그대로 x0, x1, x2, ... ,xn 식으로 펼쳐놓는다. 
let arr = ["apple", "orange", 100];
let newArr = [...arr];  

console.log('둘의 값은:', arr, newArr);
console.log('하지만 둘의 참조는:', arr === newArr);


// spread 연산자의 활용
// + 활용1. 새로운 배열 생성시, 배열 사이에 배열 끼워넣기
let parts = [300, 400, 500];
let full = [100, 200, ...parts, 600];
console.log(full);


// + 활용2. 메소드의 개별 파라미터로 값 전달하기
function sum(a, b, c){
    console.log(a + b + c);
}
let nums = [100, 200, 300, 400];
sum(...nums)
// spread 연산자 이전의 방식들..
// sum(nums[0], nums[1], nums[2]);
// sum.apply(null, nums);