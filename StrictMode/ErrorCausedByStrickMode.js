// 다음은 strict mode를 적용했을 때 에러가 발생하는 대표적인 사례다.

// 1. 암묵적 전역

(function () {
  'use strict';

  x = 1
  console.log(x); // ReferenceError : x is not defined
}())

// 2. 변수, 함수, 매개변수의 삭제
// delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.

(function () {
  'use strict';
  let x = 1;
  delete x; // SyntaxError : Delete of an unqualified identifier in strict mode.

  function foo(a) {
    delete a; // SyntaxError : Delete of an unqualified identifier in strict mode.
  }
  delete foo; // SyntaxError : Delete of an unqualified identifier in strict mode.
})

// 3. 매개변수 이름의 중복

(function () {
  'use strict';
  // SyntaxError : Duplicate parameter name not allowed in this context
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1,2));
})

// 4. 매개변수에 전달된 인수를 재할당해도 arguments에는 변화가 없다.

(function (a) {
  'use strict';
  a = 2;
  console.log("argument : " + arguments); // { 0 : 1, length: 1}
  console.log("a : " + a); // a : 2 
}(1))