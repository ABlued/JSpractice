//1. Default parameters (added in ES6)
function showMessage(message, from='unknown'){      //매개변수 default값을 정하고 싶다면 이런식으로 선언하면 된다. 
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//2. Rest parameters (added in ES6)
function printAll(...args){         //이렇게 매개변수 앞에 ...을 붙이면 배열형태로 받을 수 있다.
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){     //향상된 for 구문이다 args에 있는 값들을 차례대로 for구문을 돌게 된다.
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));        //배열을 forEach함수를 사용하여 더욱 쉽게 반복문을 만들 수 있다
}
printAll('dream', 'coding', 'ellie');

/*3.First-class function
 * 함수는 다른 변수에 할당할 수 있고, 함수의 입력매개변수로 사용될 수 있으며 함수의 리턴 값으로도 사용이 가능하다
 * 함수는 기본적으로 호이스팅이 되어있다. 함수를 선언하기도 전에도 사용할 수 있지만 아래에 있는 어나니머스 펑션은 그렇지 못하다.
 */
//print();        //오류!
 //1) Function expression
 const print = function(){      //anonymouns funciton
     console.log('print');
 }
print();
const printAgain = print;
printAgain();

//2) Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes =  function(){
    console.log('yes');
}
//named function    어나니머스 펑션과는 다르게 변수에 할당된 함수가 이름을 갖는 것
const printNo =  function print(){
    console.log('no');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//화살표 함수는 간단하게 function 키워드를 지우고 {} 중괄호를 지우고 거기에 화살표를 적으면 된다 
const hardPrint = function(){
    console.log('hardPrint');
}

const simplePrint = () => console.log('simplePrint');
const hardAdd = function(a,b){
    return a + b;
}
const simpleAdd = (a,b) => a + b;

const simpleMultiply = (a,b) => {       //함수 내에 로직이 길다면 이렇게 중괄호를 쳐서 화살표 함수를 사용할 수 있다.
    //do something more                 //화살표 함수에 중괄호를 사용했다면 return 키워드를 사용해야한다.
    return a * b;
}

//IIFE : Immediately Invoked Function Expression : 함수를 선언함과 동시에 바로 호출하게 하는 것
(function hello(){
    console.log('IIFE');
})();