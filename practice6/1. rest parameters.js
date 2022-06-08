/*********************************
* Practice 6-1) rest parameters
**********************************/

// rest paremeter는 spread 연산자와 비슷하지만, 조금은 다르게 동작한다.
// 몇 개의 인자값이 들어올지 예상할 수 없을 때 활용가능.

// 들어오는 인자값이 숫자인지 아닌지 판별하는 함수 작성
// 기존방식. 내장 arguments를 사용 arguments는 "유사 배열"임.
// 따라서 배열의 유용한 기능을 바로 사용할 수는 없음. 배열로의 변환이 필요.
function checkNum1(){
    
    let argArr = Array.from(arguments);
    argArr.forEach((value)=>{
        if (typeof value === "number")
            console.log(value,'는 숫자입니다.');
        else
            console.log(value,'는 숫자가 아닙니다.');
    });
}

// rest parameter를 사용. 
function checkNum2(...argArr){
    argArr.forEach((value)=>{
        if (typeof value === "number")
            console.log(value,'는 숫자입니다.');
        else
            console.log(value,'는 숫자가 아닙니다.');
    });
}

const result1 = checkNum1(10,2,"5",{value:5}); 
const result2 = checkNum2(10,2,3,4,5,false);