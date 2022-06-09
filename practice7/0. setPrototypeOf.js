/*********************************
* Practice 7-0) setPrototypeOf
**********************************/
// setPrototypeOf: 말 그대로 객체의 프로토타입을 정한다.
const personObj = {
    showName : function(){
        console.log(this.name);
    },
    showAge : function(){
        console.log(this.age);
    }
};

const myPerson = {
    name : "음정환",
    age : 29 
};

console.log(myPerson.__proto__);
// 0번 인자값(객체)에 1번 인자값(객체)를 프로토타입으로 넣는다.
Object.setPrototypeOf(myPerson, personObj);
console.log(myPerson.__proto__);


// ====== prototype chain 생성 예제 =========
const peopleObj = {
    getName : function(){
        return this.name;
    },
    getAge : function(){
        return this.age;
    }
};

Object.setPrototypeOf(peopleObj, personObj);

const myPeople = Object.setPrototypeOf({
    name: "아무개",
    age : 22
}, peopleObj);

// myPeople은 peopleObj를 prototype 객체로 가지고있다.
console.log(myPeople.__proto__);

// 다시 peopleObj는 personObj를 prototype 객체로 가지고있다.
console.log(myPeople.__proto__.__proto__);

// 일종의 클래스 상속과 같이 호출한 함수를 찾을때까지 하위 prototype 객체들을 검사한다.
console.log(myPeople.getName());
//console.log(myPeople.__proto__.getName.apply(myPeople));
console.log(myPeople.getAge());
//console.log(myPeople.__proto__.getAge.apply(myPeople));
myPeople.showName();
//myPeople.__proto__.__proto__.showName.apply(myPeople);
myPeople.showAge();
//myPeople.__proto__.__proto__.showAge.apply(myPeople);



