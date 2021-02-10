// prototype, constructor,proto
function Person(n, a){
    this.name = n;
    this.age = a;
}

// var gomu = new Person('고무곰', 30);
// var gomuClone1 = new gomu.__proto__.constructor('고무곰__클론1',10);
// var gomuClone2 = new gomu.constructor('고무곰__클론2',25);
// var gomuProto = Objet.getPrototypeOf(gomu);
// var gomuClone3 = new gomuProto.constructor('고무곰_클론3',20);
// var gomuClone3 = new Person.prototype.constructor('고무곰_클론4',15);

// 메소드 상속 및 동작원리
function Person1(n,a){
    this.name = n;
    this.age = a;
}
Person1.prototype.setOlder = function(){
    this.age += 1;
}
Person1.prototype.getAge = function(){
    return this.age;
}
var gomu = new Person1('고무곰',30);
Person1.prototype.age = 100;
gomu.__proto__.setOlder();
gomu.__proto__.getAge();        //101이 출력
gomu.setOlder();
gomu.getAge();      //31이 출력

var iu = new Person1('아이유',25);

// ProtoType Chaining

var arr = [1,2,3];
arr.toString = function(){
    return this.join('_');
}

console.log(arr.toString());        //자신이 만든 toString함수가 실행
console.log(arr.__proto__.toString.call(arr));      //String객체의 toString함수가 실행
console.log(arr.__proto__.__proto__.toString.call(arr));        //Object객체의 toString함수가 실행