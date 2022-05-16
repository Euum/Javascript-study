
// Destructing을 이용해서 받아온 이벤트의 타겟에 대한 태그 네임만 출력이 가능
document.querySelector("div").addEventListener("click", function({target}){
    console.log(target.tagName);
});

