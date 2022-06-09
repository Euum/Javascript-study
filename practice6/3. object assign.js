/*********************************
* Practice 6-2) object assign
**********************************/

// Object.create
// Object.create는 기존 객체를 복사(Deep copy)한 prototype을 생성하여 객체를 생성가능.
const personObj = {
    showName : function() {
        console.log(this.name);
    },
    showAge : function(){
        console.log(this.age);
    }
}

let myPerson1 = Object.create(personObj);
myPerson1.name = "홍길동";
myPerson1.age = 20;
// myPerson1.showName();
// myPerson1.showAge(); 


// Object.assign
// Object.assign을 활용하면, 기존 prototype 객체에 필요한 객체를 "추가"하여 활용할 수 있음.
// Object.assign은 1번 인자값(객체)에 2번 인자값(객체)를 추가한 객체를 반환함. 
let myPerson2 = Object.assign(Object.create(personObj), {
    name : "음정환",
    age : 29
});

// myPerson2.showName();
// myPerson2.showAge();

// 주의: 아래와 같은 문제점 발생 가능
// personObj는 prototype이 아니기 때문에 기존 객체에 속성값이 계속 추가된다.
// let myPerson3 = Object.assign(personObj, {
//     name1 : "원본에 값이 계속",
// });

// let myPerson4 = Object.assign(personObj, {
//     name2 : "추가될 수 있다.",
// });

// console.log(personObj)


// Object.assign을 활용하여 Immutable 객체 생성해보기

const previousObj = {
    name: "홍길동",
    age: 20
};

const myObj = Object.assign({}, previousObj, {
    age : 30
});

console.log(previousObj === myObj);