/*********************************
 * 0. WeakSet으로 효과적인 객체타입 저장
 * 
 * WeakSet: 참조를 가지는 객체만 저장 가능
 *          객체형태를 중복없이 저장하려고 할 때 유용하다.
 *********************************/

 const {inspect} = require('util');

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);

// 참조가 없는 객체들은 add 불가!
//ws.add(111);
//ws.add("111");
//ws.add(null);

// 외부에서 arr에 대한 참조를 제거하면 GC의 대상이 됨. (얕은 참조)
arr = null;

console.log(inspect(ws, {'showHidden': true}));
console.log(ws.has(arr), ws.has(arr2));

