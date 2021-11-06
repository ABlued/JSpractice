// class 내엔 static methods, static properties와 prototype안에 있는 method로 나뉘어진다.
// 그렇지만 인스턴스는 methods로는 접근이 가능하지만 static 쪽으로는 접근할 수 없다.
function Person(name, age){
    this._name = name || '이름없음';
    this._age = age || '나이모름';
}

Person.getInformations = function(instance){    //static methods
    return {
        name: instance._name,
        age: instance._age
    };
}

Person.prototype.getName = function(){      //method
    return this._name;
}
Person.prototype.getAge = function(){       //method
    return this._age;
}

var gomu = new Person('고무',30);

console.log(gomu.getName());
console.log(gomu.getAge());

// console.log(gomu.getInformations(gomu));        //에러가 일어난다
console.log(Person.getInformations(gomu));      //이렇게 해야 실행된다.

//js에서 상속을 구현하기
//Person 클래스에서 자신의 직책도 보여주는 Employee 클래스를 구현한다치면

function Employee(name, age, position){
    this.name = name || '이름없음';
    this.age = age || '나이모름';
    this.position = position || '직책모름';
}

// Employee.prototype = new Person();      //이런식으로 subclass 프로토타입을 superclass로 만들고
// Employee.prototype.constructor = Employee;      //subclass프로토타입의 생성자를 다시 subclass로 바라보게 해야한다.
// Employee.prototype.getPosition = function(){
//     return this.position;
// }
// var gomu1 = new Employee('고무', 30, 'CEO');
// console.dir(gomu1);

//하지만 이러면 person에 불필요한 프로퍼티가 Employee 프로토타입에 붙게 되는 경우가 있다. 그걸 방지하기 위해서

function Bridge() {}
Bridge.prototype = Person.prototype;
Employee.prototype = new Bridge();
Employee.prototype.constructor =Employee;
//매번 이 4줄을 적기는 비효율적이니 extends를 사용하자
Employee.prototype.getPosition = function(){
    return this.position;
}
var gomu1 = new Employee('고무', 30, 'CEO');
console.dir(gomu1);

var extendClass = (function(){
    function Bridge1() {
        return function (Parent, Child) {
            Bridge1.prototype = Parent.prototype;
            Child.prototype = new Bridge1();
            Child.prototype.constructor = Child;
        }
    }
})();

extendClass(Person,Employee);
Employee.prototype.getPosition = function () {
    return this.position;
}