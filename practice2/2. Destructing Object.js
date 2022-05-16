/*********************************
* Practice 2-2) Destructing Object
**********************************/
let obj = {
    name: "eum",
    address: "Korea",
    age: 29
};

// Destructing을 통해 객체 데이터 가져오기
let {name, age} = obj;
console.log(name, age)
