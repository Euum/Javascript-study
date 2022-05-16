/*********************************
* Practice 0-1) let과 closure
* (이번 학습은 1. let과 closure.html 을 실행하여 확인하였음)
**********************************/

var list = document.querySelectorAll("li");

/* 비활성 블록 *
for(var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function(){
        // 넘겨준 callback 함수는 나중에 실행됨.
        // 함수 내에서 참조하는 i는 closure 변수로, 값이 아닌 변수 자체를 참조하기 때문에,
        // 리스너에 등록된 모든 함수의 i는 동일한 값을 출력하게 됨.
        console.log(i + "번째 리스트 입니다.");
    });
}
*/

// 이러한 문제를 해결하기 위해 "블록 범위"의 지역변수를 활용 할 수 있다.
for(var i = 0; i < list.length; i++) {
    // for 문의 loop마다 변경되는 i값을 지역변수 n이 저장한다.
    let n = i;

    list[i].addEventListener("click", function(){
        // n을 클로저인 callback 함수의 컨텍스트가 바인딩한다.
        console.log(n + "번째 리스트 입니다.");
    });

    // 생성된 n은 블록 범위이기 때문에 for문의 마지막에서 소멸해야 하지만,
    // 클로저가 바인딩 하고 있기 때문에 활성 객체로 존재하게 된다.
    // 다음 loop에 생성되는 새로운 n은 이전 n과는 다른 객체로 존재한다.
}


/* 위 코드를 간단하게 하면 var i 대신 let i를 쓰면 되겠죠?
for(let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function(){
        console.log(n + "번째 리스트 입니다.");
    });
}

*/