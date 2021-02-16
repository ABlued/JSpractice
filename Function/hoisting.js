console.log(a());
console.log(b());
console.log(c());

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

    //일반함수선언문
    function a(){
        return 'a';
    }

    //기명 함수표현식
    var b = function bb(){
        return 'bb';
    }

    //익명 함수표현식
    var c = function(){
        return 'c';
    }       //익명함수를 선언하고 변수 c에 익명함수를 할당한다.
}