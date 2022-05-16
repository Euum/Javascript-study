/*********************************
* Practice 5-0) Arrow function this context
**********************************/

const myObj = {
    runTimeout() {
        // setTimeout(function() {
        //     // callback을 감싸주는 object를 기준으로 this context가 결정됨.
        //     // 즉, 이 callback 함수의 this context는 setTimeout의 this임.
        //     // this context가 myObj가 아니기 때문에 printData를 호출할 수 없음.
        //     console.log(this);
        //     this.printData(); 
        // }.bind(this), // 따라서 bind를 사용하여 원함수의 this를 가지게 함.
        // 200);

        // 대신 Arrow function을 사용하면, 따로 bind를 사용하지
        // 않더라도, 원함수의 this context를 가지게 됨.
        setTimeout(()=>{
            console.log(this);
            this.printData(); 
        }, 200);
    },

    printData() {
        console.log("printed data");
    }

}

myObj.runTimeout();