/*********************************
* Practice 1-1) const와 immutable array
* 
* -내용
*  const는 "불변(immutable)"을 의미하는것이 아니다.
* const에 할당된 값이 배열이나 오브젝트 같은 "mutable" 객체라면,
* 해당 객체를 접근하여 값을 수정하는 것은 가능하다.
* 
*  따라서 mutable 객체에 대한 원본의 immutable을 완전히 보장하려면,
* 방어적으로 배열이나 객체의 복사본을 생성하여 수정하거나,
* facebook이 제공하는 Immutable.js라는 라이브러리를 사용하는것이 좋다. 
**********************************/

function foo(){
    const list = ["apple", "orange", "watermelon"];
    //list = "fruits"; // 오류 발생
    list.push("banana"); // 오류가 아님!

    // 즉, const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 아니다.
    // const는 "불변이 아니다." 값의 재할당을 방지할 뿐이다.
    console.log('foo의 list: ', list)
    return list;
}
 

function foo2()
{
    // 그렇다면 원본 배열의 immutability를 지켜주기 위해서는 어떻게 할까?

    const list = ["apple", "orange", "watermelon"];
    const list2 = list.concat("banana");    // 기존 배열에 "banana"가 추가된 새로운 배열 반환
    
    // 원본 배열은 그대로 두고 원본 배열을 수정한 복사본을 생성하면 끝!
    console.log('list와 list2는 서로 같다?: ', list === list2);
    console.log('foo2의 list:', list);
    console.log('foo2의 list2:', list2);
    return list2;
}

foo();
foo2();