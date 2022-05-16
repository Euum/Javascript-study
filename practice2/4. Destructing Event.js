/*********************************
* Practice 2-4) Destructing Event
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

// 첫번째 person의 todo 값이 나옴.
function getTodoList([{todo}])
{
    console.log(todo)
}

getTodoList(persons);

