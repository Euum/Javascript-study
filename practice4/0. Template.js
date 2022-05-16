/*********************************
* Practice 4-0) Template 처리
**********************************/

// 웹에서의 Template 처리?
// Json으로 응답을 받고, Javacript object로 변환한 후에 어떠한 데이터 처리 조작을 한 후에 DOM에 추가
// 데이터 + HTML 문자열의 결합이 필요하기 때문.

const data = [
    {
        name : 'coffee-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbucks',
        order : false
    },
    {
        name : 'coffee-king',
        order : true,
        items : ['americano', 'latte']
    }
];

// Tagged template literals
function fn(tags, name, items){
    console.log(tags);
    if(typeof items === "undefined"){
        items = "주문가능한 상품이 없습니다.";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

const template = fn`<div>welcome ${data[0].name} !!</div>
    <h2>주문가능항목</h2><div>${data[1].items}</div>`;
console.log(template);

