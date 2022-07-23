const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?

/**
 * 위 예제의 실행 결과는 bar 함수의 상위 스코프가 무엇인지에 따라 결정된다. 두 가지 패턴을 따라 예측할 수 있다.
 *
 * 1. 함수를 '어디서 호출'했는지에 따라 함수의 상위스코프를 결정한다. -> 동적 스코프
 * 2. 함수를 '어디서 정의'했는지에 따라 함수의 상위스코프를 결정한다. -> 정적 스코프
 *
 * 1번째 방식을 동적 스코프라 한다. 함수를 정의하는 시점에는 함수가 어디서 호출될지 알 수 없다.
 * 따라서 함수가 호출되는 시점에 동적으로 상위 스코프를 결정해야 하기 때문에 동적 스코프라 한다.
 *
 * 2번째 방식을 렉시컬 스코프(Lexical Scope) 또는 정적 스코프라 한다. 동적 스코프 방식처럼 상위 스코프가
 * 동적으로 변하지 않고 '함수 정의가 평가되는 시점'에 상위 스코프가 정적으로 결정되기 때문에 정적 스코프라고 부른다.
 *
 * 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
 * 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다.
 * 즉, 함수의 상위 스코프는 언제나 자신이 정의된 스코프다!!
 *
 * 위 예제의 bar 함수는 전역에서 정의도니 함수다. 함수 선언문으로 정의된 bar함수는 전역 코드가 실행되기 전에 먼저 평가되어
 * 함수 객체를 생ㅇ성한다. 이 때 생성된 bar 함수 객체는 자신이 정의된 전역 스코프를 기억한다 그리고 bar 함수가 호출되면 호출된 곳이
 * 어디인지 관계없이 언제나 자신이 기억하고 있는 전역 스코프를 상위 스코프로 사용한다.
 * 따라서 위 예제를 실행하면 전역 변수 x의 값 1을 두 번 출력한다.
 *
 * foo() // 1
 * bar() // 1
 */
