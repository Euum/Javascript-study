/*********************************
* Practice 1-2) ES6의 string 메소드
*
* -내용
*  다른 언어에서나 제공되던 문자열 함수
* startsWith, endsWith, includes 등이 추가 되었습니다.
**********************************/


let str = "hello world!";

// startsWith, endsWith
// 시작, 끝의 문자열 일치 여부 확인
console.log('startsWith test:', str.startsWith("hello"));
console.log('endsWith test:', str.endsWith("world!"));

// includes
// 문자열 포함 여부 확인
console.log('includes test:', str.includes("world"));

