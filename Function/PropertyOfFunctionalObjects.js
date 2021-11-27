// node PropertyOfFunctionalObjects

// 자바스크립트 함수는 객체다. 따라서 함수도 프로퍼티를 가질 수 있다.
function square(number) {
  return number * number;
}
console.dir(square);
// ƒ square(number)
// arguments: null
// caller: null
// length: 1
// name: "square"
// prototype: {constructor: ƒ}

// square 함수의 모든 프로퍼티의 프로퍼티 어트리뷰트를 Object.getOwnPropertyDescriptors 메서드로 확인해볼 수 있다.
console.log(Object.getOwnPropertyDescriptors(square));
// {length: {…}, name: {…}, arguments: {…}, caller: {…}, prototype: {…}}
// arguments: {value: null, writable: false, enumerable: false, configurable: false}
// caller: {value: null, writable: false, enumerable: false, configurable: false}
// length: {value: 1, writable: false, enumerable: false, configurable: true}
// name: {value: 'square', writable: false, enumerable: false, configurable: true}
// prototype: {value: {…}, writable: true, enumerable: false, configurable: false}
// [[Prototype]]: Object

// 이처럼 arguments, caller, length, name, prototype 프로퍼티는 모든 함수 객체가 갖고 있는 데이터 프로퍼티다.
// 이들 프로퍼티는 일반 객체에는 없는 함수 객체의 고유의 프로퍼티다. 하지만 __proto__는 접근자 프로퍼티이며,
// 함수 객체 고유의 프로퍼티가 아니라 Object.prototype 객체의 프로퍼티를 상속받은 것을 알 수 있다.
