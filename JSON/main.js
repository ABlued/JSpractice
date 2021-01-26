//JSON
//JavaScript Object Notation

//1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {       //메소드는 Object안에 있는 데이터가 아니기 때문에 JSON에는 포함되지 않는다
        console.log(`${name} can jump`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);       //이렇게 원하는 요소들만 전달할 수 있다.
console.log(json);

json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key : ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

//2. JSON to Object
//parse
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
//obj.jump(); 이는 오류가 난다. 왜냐하면 rabbit을 JSON로 변환했을 때 함수는 넘겨주지 않았기 때문이다.

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate());     //birthDate는 String이기 때문에 함수를 사용할 수 없다. JSON에서 obj로 변환될 때 모든 key의 value값이 String으로 변하기 때문에 이 점 유의해야한다.

const obj1 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
})

console.log(rabbit.birthDate.getDate());
console.log(obj1.birthDate.getDate());