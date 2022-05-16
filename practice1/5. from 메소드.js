/*********************************
* Practice 1-5) from 메소드
**********************************/

// 가변 매개변수 처럼 사용이 필요한 경우 함수의 arguments 속성을 사용
// 실제로 파라미터는 비어있지만 넘긴 값은 arguements에 저장된다.
function addMark(){
    // 배열이 아닌 것(Array-like, iterable object)을 배열로 만들어주는 Array.from 사용
    // from은 "얕은 복사"임.
    let newArr = Array.from(arguments);
    
    let newData = newArr.map(function(value){
        return value + "!";
    });

    console.log(newData);
}
// 내부에서 arguments가 받는다(배열과 흡사하지만 배열은 아님!).
addMark(1,2,3,4,5);