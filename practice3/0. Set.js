/*********************************
 * 0. Set으로 유니크한 배열 만들기
 *********************************/

let arr = [1,2,3,4];
let mySet = new Set();

console.log(toString.call(mySet));

// Set: 중복없는 유일한 값을 저장할때 쓰는 자료구조
mySet.add(arr);
mySet.add("eum");
mySet.add("hong");
mySet.add("eum");

console.log(mySet);
console.log(mySet.has("eum")) // true

// 참조형이기 때문에 원본값이 변경되면 Set 내부에서도 바뀌어서 보임.
arr[0] = "change";
console.log(mySet);

// 여기서 참조가 소실되도 Set의 arr은 GC의 대상이 아님 (깊은 참조)
arr = null;

for(const elem of mySet)
{
    console.log(elem);
}
