/*********************************
* Practice 1-0) const의 사용
* 
* -내용
* const를 사용하면, 선언된 변수의 재할당을 방지할 수 있다!
*
* 변수 사용 전략 1. const를 기본으로 사용하자.
*               2. 변경이 되어야 하는 변수는 let을 사용하자 (예를들어, for문의 i)
*               3. var는 절대로 사용하지 말자.
**********************************/


function foo()
{
    // 변수의 값이 바뀌는것을 원치 않는경우
    // code convention으로 이 값은 상수임을 나타낼 수는 있다.
    // ex) homename -> HOME_NAME. (이름만 강조될 뿐 값은 바뀔 수 있다.)
    var varName = "var name"; 
    varName = "changed var name";
    console.log(varName);

    // 변수를 const 키워드로 선언하면, 상수화 되어 값을 "재할당" 할 수 없다.
    const constName = "const name";
    //constName = "couldn't change it";   // 오류 발생
    console.log(constName);
}

foo();