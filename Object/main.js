// Objects

// const name = 'ellie';
// const age = 4;
// print(name, age);
// function print(name, age){
//     console.log(name);
//     console.log(age);
// }

const ellie = {name:'ellie', age: 4};       //여러 개의 자료형을 하나로 묶은 것이 오브젝트
print(ellie);

function print(person){
    console.log(person.name);
    console.log(person.age);
}
// 오브젝트 선언방법
const obj1 = {};
const obj2 = new Object();

//자바스크립트는 동적 프로그래밍이라서 선언되지 않았더라도 이렇게 갑자기 추가하는 것도 가능하다.
ellie.hasJob = true;
console.log(ellie.hasJob);      //하지만 이런 방법을 사용하면 나중에 유지보수하기 힘들다.

//2. Computed properties
console.log(ellie['name']);     //이렇게 배열형태로 데이터에 접근할 수 있다. 주의할 점은 배열의 인덱스는 String타입으로 줘야한다. name으로 주면 undefined가 뜬다.
ellie['hasJob'] = true;     //이런식으로 데이터를 설정할때도 쓰인다.

//어떤 데이터의 값이 런타임 이후 결정되는 거라면Computed properties를 쓴다.
//ex
function printValue(obj, key){
    console.log(obj[key]);      //여기서 obj.key를 쓰면 실행이 안됨 obj의 key필드가 없기 때문
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//3. Propoerty value shorthand
const person1 = {name: 'bob', age :2};
const person2 = {name: 'steve', age :3};
const person3 = {name: 'dave', age :4};
const person4 = makePerson('ellie',30);
function makePerson(name, age){
    return{
        name,       //name = name;와 같다.
        age,        //age = age;와 같다.
    };
}

//4. Constructor function
function Person(name, age){
    //this = {};  이 코드가 생략되어있는 것이다.
    this.name = name;
    this.age = age;
    //return this; 이 코드가 생략되어있는 것이다.
}

//5. in operator : 해당 속성이 오브젝트안에 있는지 체크하는 것
console.log('name' in ellie);       //정의한 키
console.log('random' in ellie);     //정의하지 않은 키

//6. for..in vs for..of
//for (key in obj)
//console.clear();  콘솔창을 깨끗히 만드는 것
for(key in ellie){      //향상된 for구문과 같다
    console.log(key);
}

// for(value of iterable) 순서있는 데이터를 출력할 때
const array = [1,2,4,5];
for(value of array){
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name : 'ellie', age:' 20'};
const user2 = user;
user2.name = 'coder';       //이렇게 하면 user의 name도 값이 달라져있다. 즉 user2 user의 오브젝트를 복제한 것이 아닌 user의 ref가 가리키는 것을 같이 가리킬 뿐이다
console.log(user);

//그럼 오브젝트를 복사하는 방법은 없을까??
//old way   일일이 대입하는 방법
const user3 = {};
for(key in user){
    user3[key] = user[key];
}

//new way 함수를 사용해 복제함
const user4 = {};
Object.assign(user4, user);
//혹은 const user4 = Object.assign({}, user);