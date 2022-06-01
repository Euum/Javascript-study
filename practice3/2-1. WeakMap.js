/*********************************
 * 2-1. WeakMap 클래스 인스턴스 변수 보호하기
 *********************************/
const {inspect} = require('util');

const wm = new WeakMap();

// function Area(height, width){
//     this.height = height;
//     this.width = width;
// }

function Area(height, width){
    wm.set(this, {height, width});
}

// Area.prototype.getArea = function(){
//     return this.height * this.width;
// }

Area.prototype.getArea = function(){
    const {height, width} = wm.get(this);
    return height * width;
}

let area = new Area(10, 20);
console.log(area.getArea());
// height는 WeakMap에 의해 내부적으로 참조하므로 private 처럼 안보이게 가려짐
console.log(area.height);

// 참조를 잃게 되면 GC의 대상이 됨.
console.log(wm.has(area));
area = null;
console.log(wm.has(area));