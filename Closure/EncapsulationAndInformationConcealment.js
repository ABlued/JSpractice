/**
 * 자바스크립트는 public, private, protected 같은 접근 제한자를 제공하지 않는다.
 * 따라서 자바스크립트 객체의 모든 프로퍼티와 메서드는 기본적으로 외부에 공개되어 있으며 public하다.
 */

function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };
}

const me = new Person('ablue', 25);
me.sayHi(); // Hi! My name is ablue I am 25.
console.log(me.name); // ablue
console.log(me._age); // undefined

const you = new Person('you', 20);
you.sayHi(); // Hi! My name is you I am 20.
console.log(you.name); // you
console.log(you._age); // undefined

/**
 * name 프로퍼티는 현재 외부로 공개되어 있어서 자유롭게 참조가 가능하고 변경할 수 있다.
 * 즉 name 프로퍼티는 public하다.
 * 하지만 _age 변수는 Person 생성자 함수의 지역 변수이므로 Person 생성자 함수 외부에서 참조하거나 변경할 수 없다. 즉 private하다.
 *
 * 하지만 위 예제의 sayHi 메서드는 인스턴스 메서드이므로 Person 객체가 생성될때마다 중복 생성된다. sayHi 메서드를 프로토 타입 메서드로 변경하여 sayHi 메서드의 중복 생성을 방지해 보자
 */

function Person1(name, age) {
  this.name = name;
  let _age = age;
}

Person1.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
};

// 그러나 이렇게 되면 Person 생성자 함수 내의 지역 변수이 _age를 참조할 수 없는 문제가 발생한다.
// 따라서 다음과 같이 즉시 실행 함수를 사용하여 Person 생성자 함수와 Person.prototype.sayHi 메서드를 하나의 함수 내에 모아 보자.

const Person2 = (function () {
  let _age = 0;

  function Person2(name, age) {
    this.name = name;
    _age = age;
  }

  Person2.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };

  return Person2;
})();

const me2 = new Person2('ablue', 25);
me2.sayHi(); // Hi! My name is ablue I am 25.
console.log(me2.name); // ablue
console.log(me2._age); // undefined

const you2 = new Person2('you', 20);
you2.sayHi(); // Hi! My name is you I am 20.
console.log(you2.name); // you
console.log(you2._age); // undefined

/**
 * 위 패턴을 사용하면 접근 제한자를 제공하지 않는 자바스크립트에서도 정보 은닉이 가능한 것처럼 보인다.
 * 즉시 실행 함수가 반환하는 Person 생성자 함수의 Person 생성자 함수의 인스턴스가 상속받아 호출할
 * Person.prototype.sayHi 메서드는 즉시 실행 함수가 종료된 이후 호출된다.
 * 하지만 Person 생성자 함수와 sayHi 메서드는 이미 종료되어 소멸한 즉시 실행 함수의 지역 변수 _age를 참조할 수 있는 클로저다.
 */

// 하지만 위 코드도 문제가 있다.
// Person2 생성자 하무가 여러 개으 ㅣ인스턴스를 생성할 경우 다음과 같이 _age 변수의 상태가 유지되지 않는다는 것이다.

me2.sayHi(); // Hi! My name is ablue I am 20.
// me2._age 가 25에서 20으로 변했다.

/**
 * 이는 Person2.prototype.sayHi 메서드가 단 한 번 생성되는 클로저이기 때문에 발생하는 현상이다.
 * Person2.prototype.sayHi 메서드는 즉시 실행 함수가 호출될 때 생성된다.
 * 이때 Person.prototype.sayHi 메서드는 자신의 상위 스코프인 즉시 실행 함수의 실행 컨테스트의 렉시컬 환경의 참조를 [[Environment]]에 저장하여 기억한다.
 * 따라서 Person2 생성자 함수의 모든 인스턴스가 상속을 통해 호출할 수 있는 Person.prototype.sayHi 메서드의 상위 스코프는 어떤 인스턴스로 호출하더라도
 * 하나의 동일한 상위 스코프를 사용하게 된다.
 * 이러한 이유로 Person2 생성자 함수가 여러 개의 인스턴스를 생성할 경우 위와 같이 _age 변수의 상태가 유지되지 않는다.
 *
 * 이처럼 자바스킓트는 정보 은닉을 완전하게 지원하지 않는다.
 * 인스턴스 메서드를 사용한다면 자유 변수를 통해 private을 흉내 낼 수는 있지만 프로토타입 메서드를 사용하면 이마저도 불가능해진다.
 * ES6의 Symbol 또는 WeakMap을 사용하여 private한 프로퍼티를 흉내 내기도 했으나 근본적인 해결책이 되지는 않는다.
 *
 * 다행히도 2021년 1월 현재 클래스에 private필드를 정의할 수 있는 새로운 표준 사양이 제안되어 있다.
 * 표준 사양으로 승급이 확실시되는 이 제안은 현재 최신 브라우저 및 Node.js 에 이미 구현되어 있다.
 */
