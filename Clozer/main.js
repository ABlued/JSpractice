var outer = function(){
    var a = 1;
    var inner = function(){
        return ++a;
    };
    return inner;
}
var outer2 = outer();
console.log(outer2());
console.log(outer2());

// 클로저는 컨텍스트 A에서 선언한
// 변수 a를 참조하는
// 내부함수 B를
// A의 외부로 전달할 경우,
// A가 종료된 이후에도
// a가 사라지지 않는 현상을 말한다.
// 우리는 이런 클로저의 속성때문에
// 지역변수가 함수 종료 후에도 사라지지 않게 할 수 있다.
// (자바의 static과 개념은 비슷하지만 완전 같은 것은 아니다.)