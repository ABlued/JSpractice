//콜백함수는 무엇인가 일을 다른 객체에게 시키고, 그 일이 끝날때까지 기다리는 것이 아니라 그 객체가 나를 다시 부를때까지 다른 내 할일을 하고 있는 것이다.

//1. 콜백함수는 제어권(실행시점)을 넘겨준다. 사용자가 계속 실행하기 귀찮으니 실행제어권을 이 객체에게 넘겨주는 것이다.
setInterval(() => {
    console.log('1초마다 실행될 겁니다.');
}, 1000);
//setInverval(주기마다 실행할 함수, 주기);

// let arr = [1,2,3,4,5];
// var entries = [];

// arr.forEach(function(v,i){
//     entries.push([i,v,this[i]])
// },[10,20,30,40,50]);
// console.log(entries);
// arr.foorEach(callback[, thisArg])     //v : 배열에서 현재 처리 중인 요소 i : 배열에서 현재 처리 중인 요소의 인덱스
//thisArg : callback을 실행할 때 this로서 사용하는 값

//콜백함수는 함수이다. 메소드가 될 수 없다.

var arr = [1,2,3,4,5];
var obj = {
    vals:[1,2,3],
    logValues: function(v, i){
        if(this.vals){
            console.log(this.vals, v, i)
        } else {
            console.log(this, v, i);
        }
    }
};
console.log(obj.logValues(1,2));
console.log(arr.forEach(obj.logValues));

/**
 * 콜백함수의 특징
 * 1. 다른 함수(A)의 매개변수로
 * 콜백함수(B)를 전달하면,
 * A가 B의 제어권을 갖게 된다.
 * 
 * 2. 특별한 요청(bind)이 없는 한
 * A에 미리 정해진 방식에 따라 B를 호출한다.
 * 
 * 3. 미리 정해진 방식이란,
 * this에 무엇을 바인딩할지,
 * 매개변수에는 어떤 값들을 지정할지
 * 어떤 타이밍에 콜백을 호출할지 등이다.
 * 
 * 4. 콜백은 함수이다. 
 */