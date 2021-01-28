//1.Shorthand property names
{
    const ellie1 = {
        name: 'ellie',
        age: '18',
    };                  //보통 이렇게 객체 속성에 값을 직접 대입하기도 하지만

    const name = 'Ellie';
    const age = '18';

    const ellie2 = {
        name: name,
        age: age,
    }

    const ellie3 = {        //key와 value들이 똑같으면 이런 식으로 줄일 수 있다.
        name,       //name: name
        age,        //age: age
    }

    console.log(ellie2);
    console.log(ellie3);
}
// 2. Destructuring assignment
class Student{
    constructor(name, level){
        this.name = name;
        this.level = level;
    }
}
const student = new Student('bob','2');
{
    const name = student.name;
    const level = student.level;
    console.log(name, level);
}

{
    const { name, level } = student;
    console.log(name, level);
}
//array는 이런식이다.
const animals = ['dog','cat'];
{
    const [first, second] = animals;
    console.log(first, second);
}

// 3. Spread Syntax : 이 방식은 배열에 있는 요소들을 하나씩 복사해오는 것이 아닌 주소값만 참조하는 것이다. 그러므로 원래의 값을 변경하면 그것을 참조한 요소들도 값이 변경된다.
{
    const obj1 = {key: 'key1'};
    const obj2 = {key: 'key2'};
    const array = [obj1, obj2];


    const arrayCopy = [...array];       //배열을 간단하게 복사하는 방법
    console.log(arrayCopy);

    const arrayCopy2 = [...array, {key: 'key3'}];       //복사하면서 새로운 값을 추가하는 방법

    const arrayCopy3 = [...array, ...arrayCopy2];       //이런식으로 여러개의 배열을 복사하여 병합할 수 있다.
    console.log(arrayCopy3);

    const dog1 = {dog:'멍멍'};      //객체도 이 방식이 가능하다. 하지만...
    const dog2 = {dog:'왈왈'};
    const dog = {...dog1, ...dog2}; //이렇게 복사한 객체들 중 같은 속성이 있다면 맨 마지막이 덮어씌우게 된다.
    console.log(dog);       //왈왈만 표시됨
}

// 4. Default parameters
{
    function printMessage(message = 'default message'){     //인자가 주어지지 않을 경우 = 뒤에 값이 대체됨
        console.log(message);
    }
}

// 5. Ternary Operator : 삼항연산자
{
    const isCat = true;
    {
        let component;
        if(isCat){
            component = '고양이';
        } else {
            component = '강아지';
        }
        console.log(component);
    }
}

{
    const isCat = true;
    const component = isCat ? '고양이' : '강아지';
    console.log(component);
    console.log(isCat ? '고양이' : '강아지');
}

// 6 . Optional Chaining (ES11)
{
    const person1 = {
        name: 'Ellie',
        job:{
            title:'S/W Engineer',
            manager:{
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };

    function printManager(person){
        console.log(person.job.manager.name);       //person2는 job이 없으므로 오류가 일어남
    }
    function printManager1(person){
        console.log(person.job ?. manager ?.name);       //job이 있으면 && manager가 있으면 && name이 있으면 출력
    } 
    printManager1(person1);
    printManager1(person2);
}
// 7. Nullish Coalescing Operator (ES11)

{
    {
        const name = 'Ellie';
        const userName = name || 'Guest';       //||연산자는 앞에 있는 것이 false일 경우에만 뒤에 있는 것이 실행됨
        console.log(userName);                  //그러나 ||연산자는 null뿐만 아니라 false간주되는 것들('', 0, NaN, undefined)도 false로 처리되니 이 점 유의하자
    }
    {
        const name = '';
        const userName = name ?? 'Guest';       //그래서 ??연산자를 사용해 값이 없다면 Guest를 반환하는 ??연산자를 사용하자
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}
// 자바스크립트 최신 문법 (ES6, ES11) | 모르면 후회 하는 최신 문법과 사용법 정리 🐶 : https://www.youtube.com/watch?v=36HrZHzPeuY&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=23