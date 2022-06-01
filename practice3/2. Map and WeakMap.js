/*********************************
 * 2. Map & WeakMap 추가정보를 담은 객체 저장하기
 * 
 * Array -> Set, WeakSet 
 * Object -> Map, WeakMap
 * 
 * Map은 Key-Value 구조
 * WeakMap은 키값으로 객체만 받을 수 있다.
 *********************************/

const {inspect} = require('util');

let wm = new WeakMap();
let func = function(){}; // 이 함수가 얼마나 호출 되었는지를 알려고 할때.

wm.set(func, 0);
console.log(inspect(wm, {'showHidden': true}));

let count = 0;
for (let i=0; i<10; i++)
{
    count = wm.get(func);
    count++;
    wm.set(func, count);
}
console.log(inspect(wm, {'showHidden': true}));

// 얕은 참조 이므로 GC 대상이 됨
func = null;
console.log(inspect(wm, {'showHidden': true}));


