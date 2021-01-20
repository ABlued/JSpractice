//1. String concatenation

console.log('my' + ' cat');
console.log('1' + 2);        //뒤에 있는 2는 문자열로 취급해 12로 출력된다.
console.log(`${1 + 2}`);
console.log('ellie \'s \n\tbook');      //'를 출력할려면 \'를 사용해야하며 띄어쓰기나 탭은 \n/t사용

//2. Equality
const stringFive = '5';
const numberFive = 5;

//== loose equality, with type conversion   안에 들어있는 숫자가 같으니까 같은 것이다
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality, no type conversion   두 개의 데이터 타입이 다르니 서로 다른 것이다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = {name:'ellie'};
const ellie2 = {name:'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
 
//equality - puzzler
console.log(0 == false);        //둘 다 false이므로 true
console.log(0 === false);       //0은 boolean 타입이 아니므로 false
console.log('' == false);       //둘 다 false이므로 true
console.log('' === false);      //''은 boolean 타입이 아니므로 false
console.log(null == undefined); //null은 undefined은 둘 다 false    
console.log(null === undefined);//둘 다 똑같은 타입이 아니므로 false