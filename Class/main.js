'use strict';
//1. Class declarations
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;       //이렇게 변수를 _age로 해서 생성자에 이름과 다르게 만드는 이유는 똑같이 만들어주면 스택오버플로우가 일어나기 때문이다.
    }                           //생성자에 this.age = age; 구문자체가 set함수를 불러들이게 되는데 이 때 set함수 내에서도 this.age = value;라고 하면 이것또한 set함수를 불러들이기 때문에 
    set age(value){             //계속 반복해서 set함수가 호출이 되어 메모리 오버플로우가 생기게 되는 것이다. 
        if(value < 0)
            throw console.error('나이를 음수로 입력할 수 없습니다.');
        this._age = value;
    }
}

const user1 = new User('Steve','Job', 20);
console.log(user1.age);

//3. Fields (public, private)   최근에 나온 문법이라 지원되지 않은 브라우저들이 많다. 사용할려면 바벨을 이용해야 한다.
class Experiment{
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
//console.log(experiment.privateField);       //오류! 접근할 수 없음

//4. Static properties and methods
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);     //정적 변수와 메소드는 객체가 선언되지 않은 상태에서도 사용할 수 있으며 객체를 갖고 사용되는 것이 아닌 클래스명으로 사용된다
Article.printPublisher();

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();       //super키워드를 사용해서 부모의 오버라이딩 메소드를 불러올 수 있다.
        console.log('삼각형');
    }
    getArea(){      //재정의할수 있다.
        return (this.width * this.height) / 2;
    }
    toString(){
        console.log('이것은 Triangle형이야');       //이렇게 Object클래스에 명시된 메소드도 오버라이딩 할 수 있다.
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


//6. Class checking: instanceOf  자바 문법과 비슷하다.
console.log(rectangle instanceof Rectangle);        //true
console.log(triangle instanceof Rectangle);         //false
console.log(triangle instanceof Triangle);          //true
console.log(triangle instanceof Shape);             //true
console.log(triangle instanceof Object);            //true