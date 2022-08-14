/**
 * instanceof 연산자는 이항 연산자로서 좌변에 객체를 가리키는 식별자, 우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다.
 * 만약 우변의 피연산자가 함수가 아닌 경우 TypeError가 발생한다.
 */

// (객체) instanceof (생성자 함수)

function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재한다.
console.log(me instanceof Person); // true

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재한다.
console.log(me instanceof Object); // true

// instanceof 연산자가 어떻게 동작하는지 이해하기 위해 프로토타입을 교체해 보겠다.

{
  function Person(name) {
    this.name = name;
  }

  const me = new Person('Lee');

  const parent = {};

  Object.setPrototypeOf(me, parent);

  // Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
  console.log(Person.prototype === parent); // false
  console.log(parent.constructor === Person); // false

  /**
   * 현재 상황을 나타내면 이렇다.
   *
   *
   *              -------------------------------------------------------
   *              v                                                     |
   *    ---------------------------                       ---------------------------
   *    |    Object 생성자 함수      |                       |     Object.prototype    |
   *    ---------------------------                       ---------------------------
   *    | prototype |      o------|--------------------->| constructor |            |
   *    ---------------------------                       ---------------------------
   *                                                                   ^
   *                                                                   |  [[prototype]]
   *    ---------------------------                       ---------------------------
   *    |    Person 생성자 함수      |                       |          parent         |
   *    ---------------------------                       ---------------------------
   *    | prototype |             |                       |            |            |
   *    ---------------------------                       ---------------------------
   *                |                                                  ^
   *                |                                                  |  [[prototype]]
   *                |                                     ---------------------------
   *                |                                     |            me           |
   *                ㄴ-----------------------------------> ---------------------------
   *                                                      |    name    |    'Lee'   |
   *                                                      ---------------------------
   *
   * me 객체는 프로토타입이 교체되어 프로토타입과 생성자 함수 간의 연결이 끊겼지만 Person 생성자 함수에 의해 생성된 인스턴스이다.
   * 그러나 me instanceof Person은 false로 평가된다.
   * 이는 Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문이다.
   * 따라서 프로토타입으로 교체한 parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩하면 me instanceof person은 true로 평가될 것이다.
   *
   *
   */

  Person.prototype = parent;
  // Person.prototype이 me 객체의 프로토타입 체인 상에 존재한다.
  console.log(me instanceof Person); // true

  // Object.prototype이 me 객체의 프로토타입 체인 상에 존재한다.
  console.log(me instanceof Object); // true

  /**
   * 이런식으로 instanceof 연산자는 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수를 찾는 것이 아니라
   * 생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인 상에 존재하는지를 확인한다.
   *
   *              -------------------------------------------------------
   *              v                                                     |
   *    ---------------------------                       ---------------------------
   *    |    Object 생성자 함수      |                       |     Object.prototype    |
   *    ---------------------------                       ---------------------------
   *    | prototype |      o------|---------------------->| constructor |            |
   *    ---------------------------                       ---------------------------
   *                                                                   ^
   *                                                                   |  [[prototype]]
   *    ---------------------------                       ---------------------------
   *    |    Person 생성자 함수      |                       |     Person.prototype    |
   *    ---------------------------                       ---------------------------
   *    | prototype |      o------|---------------------->|           |             |
   *    ---------------------------                       ---------------------------
   *                |                                                  ^
   *                |                                                  |  [[prototype]]
   *                |                                     ---------------------------
   *                |                                     |            me           |
   *                ㄴ-----------------------------------> ---------------------------
   *                                                      |    name    |    'Lee'   |
   *                                                      ---------------------------
   *
   */
  // instancof 연산자를 함수로 표현하면 다음과 같다.

  function isInstanceof(instance, constructor) {
    const prototype = Object.getPrototypeOf(instance);

    // prototype이 null이면 Object.prototype 즉 프로토타입 체인 종점에 다다른 것이니 false이다
    if (prototype === null) return false;

    // 프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true이고
    // 아니라면 프로토타입 체인 상의 상위 프로토타입으로 이동하여 계속해서 확인한다.
    return (
      prototype === constructor.prototype ||
      isInstanceof(prototype, constructor)
    );
  }

  console.log(isInstanceof(me, Person)); // true
  console.log(isInstanceof(me, Object)); // true
  console.log(isInstanceof(me, Array)); // false

  /**
   * 따라서 생성자 함수에 의해 프로토타입이 교체되어 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴되어도
   * 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결은 파괴되지 않으므로 instanceof는 아무런 영향을 받지 않는다.
   */
}

{
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      },
    };
    return Person;
  })();

  const me = new Person('Lee');

  // constructor 프로퍼티와 생성자 함수 간의 연결이 파괴되어도 instanceof는 아무런 영향을 받지 않는다.
  console.log(me.constructor === Person); // false;

  // Person.prototype, Object.prototype 모두 me 객체의 프로토타입 체인 상에 존재한다.
  console.log(me instanceof Person); // true;
  console.log(me instanceof Object); // true;
}
