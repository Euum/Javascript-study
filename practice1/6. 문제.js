/*********************************
* Practice 1-6) 문제 풀기

filter, includes, from을 사용해서 문자열 'e'가 포함된
배열을 만들어서 반환하기
**********************************/

function print(){
    const inputList = document.querySelectorAll("li");
    const inputArr = Array.from(inputList);
    
    const resultArr = inputArr.filter(function(currValue){
        return currValue.textContent.includes("e");
    });

    return resultArr;
}

console.log(print());