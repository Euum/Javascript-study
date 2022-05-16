/*********************************
* Practice 0-0) 변수의 범위
*
* -내용
* var는 "전역범위"와 "함수범위" 단 두가지의 범위를 가진다.
* 따라서 같은 함수내에 있다면 if문 블록 안쪽에서 선언되든 바깥에 선언되든
* 같은 영역이라면 무조건 참조가 가능...
* 
* "블록범위"를 가지는 let을 사용하도록 하자.
**********************************/


// 전역으로 선언된 var, let 변수는 스크립트 어디에서든 참조 가능.
var namevar = "global var";
let namelet = "global let";

function home() {
    // 둘다 전역변수로 참조 가능
    console.log(namevar);
    console.log(namelet);

    // 함수 내부의 var, let 변수는 함수 내부에서만 참조 가능.
    var homevar = "homevar";
    let homelet = "homelet";

    // 마찬가지로 i는 함수 내부에서 선언되었기 때문에,
    for (var i = 0; i < 10; i++)
    {
        console.log('for 블록 안쪽 i = ' + i); // 이곳과
    }
    console.log('for 블록 바깥 i = ' + i); // 이곳에서 둘다 참조 가능하다.

    if(true)
    {
        var ifvar = "ifvar"; // if 블록 안쪽에 있지만...
    }
    console.log(ifvar); // 여기서도 사용이 가능. <-- 실수 할 가능성이 큰 코드.

    // 하지만 let으로 선언된 변수는 "무조건" 해당 block에서만 참조가 가능하다!
    for (let j = 0; j < 10; j++) 
    {
        console.log('for 블록 안쪽 j = ' + j); // 이건 가능하지만
    }
    //console.log('for 블록 바깥 j = ' + j); // 이건 불가능
}

home();

