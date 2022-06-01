/*********************************
 * 3. Lotto 번호 만들기.
 * 
 * 유일한 값을 추출하는 과정에서 Set을 사용할 것.
 * getRandomNumber 함수에 변수를 전달하는 과정에서 destructing 사용할 것.
 *********************************/

const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
};

// 랜덤한 유일한 숫자값을 추출
function getRandomNumber({name, count, maxNumber}){

    let numSet = new Set();
    
    while(numSet.size < count){
        let number = Math.ceil(Math.random() * maxNumber);
        numSet.add(number);
    }

    let [...ret] = numSet.values();
    ret.sort((a, b) => a - b);
    return ret;
}

console.log(getRandomNumber(SETTING));



