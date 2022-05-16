/*********************************
* Practice 2-1) Destructing Array
**********************************/

let data = ["eum", "kim", "park", "lee"];
// 배열 데이터를 읽는법
let eum = data[0];
let kim = data[1];
console.log(eum, kim);

// Destructing 을 이용해 읽는법
let [,, park, lee] = data;
console.log(park, lee)
