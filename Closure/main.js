// var outer = function(){
//     var a = 1;
//     var inner = function(){
//         return ++a;
//     };
//     return inner;
// }
// var outer2 = outer();
// console.log(outer2());
// console.log(outer2());

// 클로저는 컨텍스트 A에서 선언한
// 변수 a를 참조하는
// 내부함수 B를
// A의 외부로 전달할 경우,
// A가 종료된 이후에도
// a가 사라지지 않는 현상을 말한다.
// 우리는 이런 클로저의 속성때문에
// 지역변수가 함수 종료 후에도 사라지지 않게 할 수 있다.
// (자바의 static과 개념은 비슷하지만 완전 같은 것은 아니다.)

// 클로저를 잘 이용하면 접근 권한 제어, 지역변수 보호, 데이터 보존 및 활용 할 수 있다는 장점이 있다.
// 예시를 들어보면

// function a() {
//     var x = 1;
//     function b() {
//         console.log(x);
//     }
//     b();
// }
// a();
// console.log(x);
// 이 코드는 말이 안된다. x는 a함수 외에서는 접근할 수 없기 때문이다.

// function a() {
//     var x = 1;
//     return function b() {
//         console.log(x);
//     }
// }

// var c = a();
// c();

// 이런 식으로 바꾸면 외부에서 x의 값을 볼 수 있지만 x의 값을 설정할 수 없다.
// 객체지향에선 내외부에서 데이터를 설정하고 송수신할 수 있어야한다.
// x가 외부에서도 값을 설정하게 만들려면 권한을 주면 된다.

function a() {
    var _x = 1;
    return {
        get x() { return _x; },
        set x(v) { _x = v; }
    }
}

var c = a();
c.x = 10;

// 이런 식으로 하면 외부에서 x의 값을 수정할 수 없다.
// 심지어 변수의 이름도 _x로 바꾸니 외부에선 a의 x변수를 함부로 설정할 수 없다. 즉 set함수인 x()를 사용해야 바꿀 수 있다. 

// 스코프는 정의될 때 결정된다.

// 자동차 게임을 통해 클로저로 자바의 접근지정자를 흉내내보자 
// - 자동차 게임 -

// - 차량별로 연료량 및 연비는 랜덤
// - 유저별로 차량 하나씩 고르면 게임 시작
// - 각 유저는 자신의 턴에 주사위를 굴려 랜덤하게 나온 숫자만큼 이동함
// - 만약 연료가 부족하면 이동불가
// - 가장 멀리 간 사람이 승리

let Car = function(f,p){
    let fuel = f;   // 연료(l)
    let power = p;   // 연비(km/l)
    let total = 0;   // 총 이동거리
    return {
        run: function (km) {
            let wasteFuel = km / power;
            if(fuel < wasteFuel){
                console.log('이동 불가');
                return;
            }
            fuel -= wasteFuel;
            total += km;
        }
    }
};
let car = Car(10,2);
car.run(5);
// 1. 함수에서 지역변수 및 내부함수 등을 생성한다.
// 2. 외부에 노출시키고자 하는 멤버들로 구성된 객체를 return한다.
// -> return한 객체에 포함되지 않은 멤버들은 private하다.
// -> return한 객체에 포함된 멤버들은 public하다.
// return function 은 최초 선언시에 정보를 저장한다.