const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  return Person;
})();

const me = new Person('Lee');

//인스턴스 메서드
me.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};

me.sayHello(); //프로토타입 메서드가 호출될까 인스턴스 메서드가 호출될가??

/**
 * 답은 인스턴스 메서드가 호출된다.
 * 그 이유는 프로토타입 체인의 의해 sayHello는 Person.prototype보다 me 객체 내의 인스턴스 메서드를 먼저 찾기 때문이다.
 * 이와 같이 프로토타입 메서드의 이름을 인스턴스 메서드에 오버라이딩을 하면 프로토타입이 마치 가려지는 것 같은 현상을
 * 프로퍼티 섀도잉이라 한다.
 */

// 만약 이 sayHello 메서드를 삭제하면 무엇부터 삭제가 될까??

delete me.sayHello;

me.sayHello(); // Hi! My name is Lee

// 당연히 프로토타입 메서드가 아닌 인스턴스 메서드 sayHello가 삭제된다.
// 그 이유는 하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하기 때문이다.
// 즉 프로토타입에 get 액세스는 허용되나 set 액세스는 허용되지 않는다.
// 프로토타입 프로퍼티를 변경 또는 삭제하려면 하위 객체를 토앻 프로토타입 체인으로 접근하는 것이 아니라 프로토타입에 직접 접근해서 변경해야한다.

delete Person.prototype.sayHello;
me.sayHello(); // TypeError: me.sayHello is not a function
