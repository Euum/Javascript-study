/*********************************
* Practice 6-0) default parameters
**********************************/

// default parameter는 parameter에 기본값을 정의하는것.
// 호출시에 생략가능한 인자값이 된다.
function multiply(value, size={value:1}){
    return value * size.value;
}

console.log(multiply(5));