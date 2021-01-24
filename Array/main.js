'use strict'
 
//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

//배열을 차례대로 출력하는 방법은 for, for of가 있는데 이부분은 Object->main.js를 참고하고
//여기선 array타입에 있는 메소드인 forEach를 다뤄보겠다.
fruits.forEach(function(fruit, index, array){      //함수를 전달할 땐 이렇게 선언해야 한다.
    console.log(fruit, index, array);               //foreach는 첫번째 인자는 값, 두번째는 인덱스, 세번째는 배열 자체를 사용할 수 있게 해준다.
});
fruits.forEach((fruit) => console.log(fruit));      //이렇게 바꿀 수 있다.

//4. Addtion, deletion, copy
//push : add an item to the end
fruits.push('strawberry','peach');      //뒤에다 데이터를 집어넣는 것
console.log(fruits);
//pop : remove an item from the end
fruits.pop();       //뒤에 있는 데이터를 꺼내는 것
fruits.pop();
console.log(fruits);

//unshift : 데이터를 앞에다가 집어넣는 것
fruits.unshift('strawberry','peach');
console.log(fruits);
//shift : 앞에 있는 데이터를 꺼내는 것
fruits.shift();
fruits.shift();
console.log(fruits);

//shift, unshift는 push, pop보다 훨씬 느리다. 그 이유는 shift, unshift는 모든 인덱스를 정렬해야하는 작업이 있기 때문이다.

//remove
fruits.push('strawberry','peach','lemon');
console.log(fruits);
//함수인자가 하나일 경우 시작 인덱스부터 끝까지 지운다.
//함수인자가 두개일 경우 첫번째 인자부터 두번째 인자의 인덱스까지 지운다.
//함수인자가 세 개 이상일 경우 첫번째 인자부터 두번째 인자까지 지운 후 세번째 인자부터 넣는다.
fruits.splice(1,1); //이러면 1번째 인덱스 데이터만 지우게 된다.
console.log(fruits);
fruits.splice(1,1,'melon','watermelon');   //만약 (1,0,'melon')으로 해놓으면 아무것도 삭제하지않은채로 인덱스 1에가서 melon을 추가할 수 있다.
console.log(fruits);

const fruits2 = ['후르츠','mango'];
const newFruits = fruits.concat(fruits2);       //fruits와 fruits2가 붙여져서 newFruits에 저장된다.
console.log(newFruits);

//5. Searching
//find the index
console.log(fruits.indexOf('apple'));       //몇번째 인덱스에 있는지 반환(배열에 없을경우 -1 반환)
console.log(fruits.includes('watermelon')); //엘리멘트가 배열에 있는지 boolean형태로 반환

//LastIndexOf
fruits.push('apple');
console.log(fruits.lastIndexOf('apple'));       //배열안에 apple이 여러 개 있을 겨웅 lastIndexOf를 쓰면 가장 마지막에 있는 apple의 인덱스가 나옴