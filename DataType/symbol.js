// 심벌(Symbol)은 ES6에 도입된 7번째 데이터 타입으로 변경 불가능한 원시 타입의 값이다. 심벌 값은 다른 값과 중복되지 않은 유일무이한 값이다.

// 1. 심벌 값의 생성
// 심벌 값은 Symbol 함수를 호출하여 생성해야 한다.
// 주의할 점은 생성된 심벌값은 외부로 노출되지 않아 확인할 수 없으며, 다른 값과 절대 중복되지 않는 유일무이한 값이다.

const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

// 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol); // Symbol()

/**
 * Symbol 함수는 선택적으로 문자열을 인수로 전달할 수 있다.
 * 이 문자열은 생성된 심벌 값에 대한 설명으로 디버깅 용도로만 사용되며, 심벌 값 생성에 어떠한 영향도 주지 않는다.
 */
const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2); // false

// 2. Symbol.for, Symbol.keyFor 메소드

/**
 *  Symbol.for 메소드는 인수로 전달받은 문자열을 키로 사용하여
 *  심벌 값의 쌍들이 저장되어 있는 전역 심벌 레지스트리에서 해당 키와 일치하는 심벌 값을 검색한다.
 *  - 검색에 성공하면 새로운 심벌 값을 생성하지 안혹 검색된 심벌 값을 반환한다.
 *  - 검색에 실패하면 새로운 심벌 값을 생성하여 Symbol.for 메소드의 인수로 전달된 키로 전역 심벌 레지스트리에 저장하고 이를 반환한다.
 */

// 이미 있으니 mySymbol을 반환
const s1 = Symbol.for('mySymbol');
const s2 = Symbol.for('mySymbol');
console.log(s1 === mySymbol1); // false
console.log(s1 === s2); // true

// 없으면 그 문자열을 갖는 심벌을 반환
const s3 = Symbol.for('hello world');

/**
 * Symbol 함수는 호출될 때마다 유일무이한 심벌 값을 생성한다.
 * 이때 자바스크립트 엔진이 관리하는 심벌 값 저장소인 전역 심벌 레지스트리에서 심벌 값을 검색할 수 있는 키를 지정할 수 없으므로
 * 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
 * 하지만 Symbol.for 메소드를 사용하면 애플리케이션 전역에서 중복되지 않는 유일무이한 상수인 심벌 값을
 * 단 하나만 생성하여 전역 심벌 레지스트리를 통해 공유할 수 있다.
 */

// Symbol.keyFor 메서드를 사용하면 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출할 수 있다.

const s4 = Symbol.for('ablueSymbol');
Symbol.keyFor(s1); // ablueSymbol

// Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
const s5 = Symbol('s5');
Symbol.keyFor(s5); // undefined
