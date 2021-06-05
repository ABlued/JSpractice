console.log(a());
// console.log(b());
// console.log(c());

function a(){
    return 'a';
}
var b = function bb(){
    return 'bb';
}
var c = function(){
    return 'c';
}

// 함수 자체는 호이스팅이 되어 맨 위로 올라간다.
// 하지만 변수에 할당된 함수같은 경우엔 변수선언만 올라가며 할당은 되지 않는다.
// 즉 이 코드는 실제 실행될때는 아래처럼 실행된다.

// function a(){
//     return 'a';
// }

// var b;
// var c;
// console.log(a());
// console.log(b());
// console.log(c());

// b = function bb(){
//     return 'bb';
// }
// c = function(){
//     return 'c';
// }

{
//함수선언문은 크게 3가지가 있다. 일반함수선언문, 기명 함수표현식, 익명함수표현식

    //일반함수선언문(이 경우에는 함수전체가 호이스팅된다.)
    function a(){
        return 'a';
    }
    // 함수표현식 같은 경우에는 함수는 그대로 있고 변수만 호이스팅이 된다.
    //기명 함수표현식
    var b = function bb(){
        return 'bb';
    }

    //익명 함수표현식
    var c = function(){
        return 'c';
    }       //익명함수를 선언하고 변수 c에 익명함수를 할당한다.
}

// 캐스캐이팅 (같은 함수명이면 제일 나중에 선언된 함수과 출력된다.)

function sum(a, b) {
    return a + ' + ' + b + ' = ' + (a + b);
}
console.log(sum(1,2));

function sum(a,b) {
    return a + b;
}
console.log(sum(3,4));
// 그래서 무조건 호이스팅이 되지 않는 함수표현식을 사용하는 것이 좋다
// 왜냐하면 어떤 함수에서 오류가 일어날 경우 일반함수선언문은 무조건 호이스팅이 되니 
// 어디서 오류가 일어났는지 찾기 힘들기 때문이다.