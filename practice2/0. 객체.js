/*********************************
* Practice 2-0) 객체
**********************************/

// 1. 리터럴 방식
// 객체의 기본적인 생성방법. 프로퍼티를 수동으로 설정. 
const name = "eum";
const age = 29;
const obj = {
    name : name,
    age: age
};
console.log(obj)

// 2. Object() 생성자 함수 사용
// new 키워드를 사용하여 빈 Object 객체를 생성후 프로퍼티 설정
const obj2 = new Object();
obj2.name = "eum";
obj2.age = 29;
console.log(obj2);

// 3. 생성자 함수를 만들어 사용
// 생성자 함수를 직접 정의하여 this 키워드를 통해 프로퍼티 설정
function getObj(){
    // new를 붙여 호출한 경우
    // this = {}; 가 암시적으로 생성
    this.name = "eum";
    this.age = 29;
    this.getName = function(){
        return this.name;
    }
    this.setName = function(newName){
        this.name = newName;
    }
    this.getAge = function(){
        return this.age;
    }
    this.setAge = function(newAge){
        this.age = newAge;
    }
    this.printInfo = function(){
        console.log('name:', this.name,',', 'age:', this.age);
    }
    
    // new를 붙여 호출한경우 
    // return this; 암시적으로 this를 리턴
}
var obj3 = new getObj();
obj3.printInfo();

// 4. 간단한 객체 생성법(ES6)
// Key, Value가 서로 동일한 이름이라면 Key를 생략할 수 있다.
function simpleObj(name, age){
    return {
        // new를 붙여 생성할 필요 없음.
        // 이안의 this는 이미 이 객체를 가리킴.
        name,
        age,
        getName(){return this.name;},
        setName(newName){this.name = newName;},
        getAge(){return this.age;},
        setAge(newAge){this.age = newAge;},
        printInfo(){console.log('name:', this.name,',', 'age:', this.age);}
    };
}
var obj4 = new simpleObj();
var obj5 = new simpleObj('eum', 29);
obj4.printInfo();
obj5.printInfo();