/*********************************
* Practice 2-3) Destructing Json
**********************************/

var persons = [
    {
        "name" : "eum",
        "age" : 29,
        "todo" : [
            "work", "study", "sleep"
        ]
    },
    {
        "name" : "hong",
        "age" : 100,
        "todo" : [
            "east", "west", "jump"
        ]
    }
] 

// Json 형식 객체에서 Destructing으로 값 가져오기
/*
let [, person1] = persons;
let {name, age} = person1;
*/

// 위의 방식을 아래로 압축 가능!
let [,{name, age}] = persons; 
console.log(name, age);