/**
 * 전역공간에서 window/global
 * 함수 호출시 window/global
 * 메소드 호출시 메소드 호출 주체(메소드명 앞)
 * callback 호출시 기본적으로 함수내부에서와 동일
 * 생성자함수 호출시 인스턴스
 */

//전역공간에서 

console.log(this);      //window/global 객체가 나온다.

//함수 호출시 (함수는 전역객체의 메소드다 : 항상 맞는 말은 아니지만 이렇게 생각해도 괜찮다.)

function a(){
    console.log(this);      //window/global 객체가 나온다.
}
a();

function b(){
    function c(){
        console.log(this);      //window/global 객체가 나온다.
    }
    c();
}
b();

var d = {
    e : function(){
        function f(){
            console.log(this);      //window/global 객체가 나온다.
        }
        f();        //this를 호출한 함수를 보면 된다. 함수로써 호출된 것이니 window객체가 나온다.
    }
}
d.e();

//메소드 호출 시

var g = {
    h: function(){
        console.log(this);      //객체 g의 h값이 나온다.
    }
}
g.h();

var i = {
    j: {
        k: function(){
            console.log(this);      //객체 i의 j의 k값이 나온다.
        }
    }
}
i.j.k();        //함수를 호출한 대상이 i.j이므로 k가 this가 된다.

//내부함수에서의 우회법

var l = 10;
var obj = {
    m:20,
    n: function(){
        // 이 함수내에서의 this는 obj를 가리킨다.
        var self = this;
        console.log(this.m);        //20이 나온다
        function o(){
            // 이 함수내에서의 this는 전역공간을 가리킨다.
            console.log(self.m);    //20이 나온다.
        }
        o();
    }
}
obj.n();

//callback 호출 시

function cbA(x,y,z) {
    console.log(this, x, y, z);
}
var cbB = {
    cbC: 'eee'
};

cbA.call(cbB, 1,2,3);   // call과 apply의 차이점은 argument가 각각 원소로 받냐 배열로 받냐의 차이이다. 입맛대로 사용하면 된다.
cbA.apply(cbB, [1,2,3]);
var cbC = cbA.bind(cbB);    // call,apply와 bind의 차이는 call,apply는 즉시 호출되지만 bind는 함수를 만드는 것이다.
cbC(1,2,3);

var cbD = cbA.bind(cbB,1,2);
cbD(3);





var callback =  function(){
    console.dir(this);
};

var obj1 = {
    p: 1,
    q: function(cb){
        cb.call(this);       //window 객체가 나온다. cb.call(this)로 하면은 obj1이 this가 된다.
    }
};
obj1.q(callback);

//settimeout 함수 사용시

var obj2 ={
    r: 1
};
setTimeout(callback.bind(obj2), 100);       //this는 obj2가 된다.

//이벤트

document.body.innerHTML += '<div id="a">클릭하세요</div>';

document.getElementById('a').addEventListener('click',function(){
    console.dir(this);
}.bind(obj2));       //기본적으로는 div객체가 나오지만 이렇게 bind함수를 쓰면은 obj가 this가 된다.

// 기본적으로는 함수의 this와 같다.
// 제어권을 가진 함수가 callback의 this를 명시한 경우 그에 따른다.Person
// 개발자가 this를  바인딩한 채로 callback을 넘기면 그에 따른다.

//생성자 함수 호출 시

function Person(n, a) {
    this.name = n;
    this.age = a;
}
var gomugom = new Person('고무곰', 30);
console.log(gomugom);