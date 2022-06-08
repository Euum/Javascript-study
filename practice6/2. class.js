/*********************************
* Practice 6-2) rest parameters
**********************************/

// 기존의 Javascript에는 class가 없다! ES6에서 추가됨.

// class 이전의 객체 생성 방식 => 객체 Prototype을 정의
function Person(name="홍길동"){
    this.name = name;
}

Person.prototype.showName = function() {
    console.log(this.name);
}

const p1 = new Person();
p1.showName();

// class를 통한 객체 생성 방식
class People{
    constructor(name="홍길동", age=20){
        this.name = name;
        this.age = age;
    }

    showName(){
        console.log(this.name);
    }
}
// 선언 형태만 다를뿐, 기존 객체 Prototype 함수와 동일함!
People.prototype.showAge = function(){
    console.log(this.age);
}

console.log("Person의 타입은?", typeof Person);
console.log("People의 타입은?", typeof People);

const p2 = new People();
p2.showName();
p2.showAge();