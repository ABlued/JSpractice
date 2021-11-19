// 객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다. 하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다는 단점이 있다.
// 당연한 말처럼 들리겠지만 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적이다.
// 다음 예제를 살펴보자

const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter()); // 20

// 이렇게 객체의 메서드는 같지만 프로퍼티 값이 다른 것이 일상 다반사이다.
// 원을 표현한 객체인 circle1, circle2 객체는 서로 프로퍼티 구조가 동일하다. 객체 고유의 상태 데이터인 radius 값만 다르고 말이다.
// 하지만 객체 리터럴에 의해 객체를 생성하는 경우 프로퍼티 구조가 동일함에도 불구하고 매번 같은 프로퍼티와 메서드를 기술해야 한다.

// 이렇게 무지한 하드코딩을 피하기 위해 우리는 객체 리터럴이 아닌 생성자 함수에 의한 객체 생성 방식을 추구해야 할 때가 올 것이다.

// 생성자 함수에 의한 객체 생성 방식은 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 ㄱ구조가 동일한 객체 여러 개를 간편하게 생성하는 방법이 있다.

// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const Circle3 = new Circle(5);
const Circle4 = new Circle(10);

console.log(Circle3.getDiameter()); // 10
console.log(Circle4.getDiameter()); // 20
