// 이 코드에서는 다양한 객체 생성 방식 중에서 생성자 함수를 사용하여 객체를 생성하는 방식을 살펴보자.
// 그리고 객체 리터럴을 사용하여 객체를 생성하는 방식과 생성자 함수를 사용하여 객체를 생성하는 방식과의 장단점을 살펴보자

// Object 생성자 함수
// new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

const person = new Object();

// 프로퍼티도 동적으로 추가할 수 있다.
person.name = 'Lee';
person.sayHello = function () {
  console.log('Hi! My naem is ' + this.name);
};

console.log(person); // { name: 'Lee', sayHello: [Function] }
person.sayHello(); // Hi! My naem is Lee

// 생성자 함수란 new 연산자와 함꼐 호출하여 객체(인스턴스)를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.
// 자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function , Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공한다.

const strObj = new String('Lee');
console.log(typeof strObj); // object
console.log(strObj); // [String: 'Lee']

const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); // [Number: 123]

const square = new Function('x', 'return x * x');
console.log(typeof square); // function
console.log(square); // [Function: anonymous]

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp); // /ab+c/i
