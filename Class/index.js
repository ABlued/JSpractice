/**
 * 클래스는 일급 객체로서 다음과 같은 특징을 갖는다.
 *
 * - 무명의 리터럴로 생성할 수 있다.
 * - 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
 * - 함수의 매개변수에게 전달할 수 있다.
 * - 함수의 반환값으로 사용할 수 있다.
 */

/**
 * 클래스는 함수다. 따라서 클래스는 값처럼 사용할 수 있는 일급 객체다.
 * 클래스 몸체에는 생성자, 프로토타입 메서드, 정적 메서드를 만들 수 있다.
 */

class Person {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // 프로토타입 메소드
  sayHi() {
    console.log(`Hi My name is ${this.name}`);
  }

  // 정적 메소드
  static sayHello() {
    console.log('Hello');
  }
}
// 인스턴스 생성
const me = new Person('Lee');

console.log(me.name); // Lee

me.sayHi(); // Hi My name is Lee
Person.sayHello(); // Hello

// 클래스는 생성자 함수이며 new 연산자와 함께 호출되어 인스턴스를 생성한다.

class Kim {}

const kim = new Kim();
console.log(kim); // Kim {}

// 함수 표현식으로도 생성이 가능하다.
const Person = class MyCalss {};
const me = new Person(); // 함수 표현식으로 생성해도 new 연산자를 붙여야 한다.
//함수 표현식으로 생성한 클래스이름은 클래스 몸체에서만 유효한 식별자다.
// console.log(MyClass); // ReferenceError : MyClass is not defined
// const you = new MyClass(); // ReferenceError : MyClass is not defined
