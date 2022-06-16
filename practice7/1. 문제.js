// 연속되는 수
let answer = function (nums){
    nums.sort();
    console.log(nums);
    for (i=0; i<nums.length-1; i++)
    {
        if(nums[i]+1 != nums[i+1])
            return 'No';
    }
    return 'yes'
}
// let nums = [1,4,2,6,3];
// console.log(answer(nums));

// 객체의 함수 응용
const nationWith = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
};

answer = function(nationObj){
    const koreaArea = nationObj.korea;
    delete nationObj.korea;

    const entries = Object.entries(nationObj);
    let gap = Math.max(...Object.values(nationObj)) - koreaArea;
    let item;

    entries.forEach(element =>{
        let newGap = Math.abs(element[1] - koreaArea);
        if (newGap < gap){   
            gap = newGap;
            item = [element[0], gap];
        }
    });

    console.log(...item);
};

// answer(nationWith);

// 1의 개수
answer = function(){
    let str = '';
    for (let i = 1; i <= 1000; i++)
        str += i;

    let count = 0;
    for (let j of str){
        if (j == 1)
            count++;
    }

    console.log(count);
};
// answer();

// 콤마 찍기
answer = function(num){
    let strNum = new String(num);
 
    if (strNum.length <= 3)
    {
        console.log();
        return strNum;
    }    
    
    return arguments.callee(strNum.slice(0, strNum.length - 3)) + ',' + strNum.slice(strNum.length - 3);
};
console.log(answer(1234567890));