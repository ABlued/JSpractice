//ES5에 설정된 명령문이다 개발자의 실수를 방지하기 위한 명령문. 예로 들면 선언되지 않는 변수를 사용하면 console창에 오류를 띄워준다. 
'use strict';

//2. Variable
//let (ES6에 추가되어진 자료형)

{
    let name = "ABlue";     //block안에 있는 것들은 block밖에서 사용할 수 없다.
    console.log(name);    
}

console.log(age);       //호이스팅은 어디에 사용되었든간에 선언을 위로 끌어준다 라는 개념인데 age는 이 구분이 명확하지 않아 선언되기도 전에 사용해도 오류가 나오지 않는다.
age = 4;                //또한 var는 block도 무시해서 block안에 var를 선언해도 block밖에서도 사용가능하다. 그래서 var를 자주 사용해선 안되고 호이스팅 구분이 명확한 let을 사용해야한다.
var age;

// console.log(value);     //오류가 일어남!
let value = 30;

const dayInWeek = 7;        //상수를 쓰면 좋은 점 : 보안성, 쓰레드 안정성, 개발자의 실수를 줄임

//4. Variable types
//primitive type : 더 이상 나누어질수 없는 타입 ex) number, string, boolean, null, undefiedn
//object, box container : primi 타입을 여러 개 묶어놓은 것
//function, first-calss function : JS에선 함수도 데이터 타입으로 볼 수 있음. 그래서 함수 입력매개변수를 함수를 사용할 수 있음

const count = 17;       //Integer
const size = 17.1;      //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values :
const infinity = 1/0;   //infinity 양의 무한대로 발산
const negativeInfinity = -1 / 0;    //-infinity 음의 무한대로 발산
const nAn = 'not a number' / 2;     //NaN이 출력이 됨 숫자가 아니다 라는 뜻의 Not a Number

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//BigInt(최근에 지원됨 크롬, 파폭만 지원됨 안되는경우는 숫자끝에 이상한 문자가 붙었다고 오류가 나옴)
const bigInt = 1234318950713489574309587349586340579314659813740918345610394n;      //원래는 JS는 숫자범위가 -2의 54승 ~ 2의 54승 범위지만 그보다 더 큰 수를 표현할려면 최근에 생긴 BigInt를 써야한다
                                                                                    //숫자 뒤에 n을 붙이면 그것이 BigInt타입이 됨

//string
const char = 'c';
const grendan = 'grendan';
const greeting = 'heelo' + grendan;      //+ 연산자로 문자열끼리 붙일 수 있음
const helloBob = `hi ${grendan}`;

//boolean
//0, null, undefined, NaN, '' 는  false로 간주
//이 이외의 모든 값들은 true로 간주
const canRead = true;
const test = 3 < 1;  //false

//null은 너는 아무것도 아닌 값을 지정할 때 쓰인다
let nothing = null;
console.log(`value: ${nothing}, type ${typeof nothing}`);

//undefined 선언은 됐지만 아직 초기화되어있지 않은 상태
let x;
console.log(`value: ${x}, type ${typeof x}`);

//object, real-life object, data structure
const ellie = {name: 'ellie', age:20};      //이런식으로 객체를 상수화하면
ellie.age = 21; //안에 값은 변경이 가능해도
const Bob = {name:'ellie', age:20};
//ellie = Bob;    //다른 객체로 복사할 수는 없다. 객체가 참조하는 ref가 잠겨있기 때문이다.    object -> ref -> name, age

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));    //문자열일 경우에는 아무문제없이 0번째의 인덱스가 출력됨
console.log(`value: ${text}, type ${typeof text}`);
text = 1;
console.log(`value: ${text}, type ${typeof text}`);
text = '7' + 5;     //js는 이렇게 문자열과 숫자를 더하면 데이터타입을 추론해 75의 결과가 나옴(문자열끼리 더한다고 생각)
console.log(`value: ${text}, type ${typeof text}`);
text = '8' / '2';   //문자열과 문자열을 나눠도 그 안에 숫자가 있으면 데이터타입을 추론해 4라고 인식
console.log(`value: ${text}, type ${typeof text}`);
console.log(text.charAt(0));        //값이 4가 저장된 number타입을 갖게 된 이후에는 당연히 charAt함수를 사용할 수 없게 됨