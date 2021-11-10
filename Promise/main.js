'use strict';
/**
 * promise는 콜백함수 대신에 비동기적인 처리를 할 수 있는 것이다.
 * promise의 중요한 요소는 state와 consumer가 있다
 * state는 자신의 일이 다 처리되었는지 아닌지의 현재상태를 나타내주는 것이고
 * consumer는 데이터를 제공하는 사람과 쓰는사람의 차이점을 알아야하는 것이다.
 * state pending(처리 중) -> fulfilled (완료) or rejected(네트워크 오류 및 다른 문제가 생김)
 * producer vs consumer
 */

//1. Producer
//새로운 콜백가 만들어지면 executor가 자동적으로 실행된다는 것을 유의하자.
const promise = new Promise((resolve, reject) => {
  //여러가지 로직(네트워크 통신 및 파일 처리 등등)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); //일이 정상적으로 끝마치게 되면 resolve라는 콜백함수를 호출하면 된다.
    //reject(new Error('no network'));  //일이 비정상적으로 끝마치게 되면 reject라는 콜백함수를 호출하면 된다.
  }, 2000);
});

//2. Consumers: then, catch, finally로 받아올 수 있음
//  promise.then((value) => {      //promise가 정상적으로 수행하게되면 호출된다. 여기서 value는 promise에서 정상적으로 받아온 값('ellie')이다.
//     console.log(value);
//  })
promise
  .then((value) => console.log(value))
  .catch((error) => {
    //promise가 비정상적으로 수행하게 되면 호출된다. 여기서 error는 promise에서 받아온 값(Error('no network'))이다.
    console.log(error);
  })
  .finally(() => {
    //정상적으로 수행하든 비정상적으로 수행하든 호출되는 것.
    console.log('finally');
  });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('꼬끼오'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => egg`), 1000);
    //setTimeout(() => reject(new Error(`error ${hen} => egg`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => chicken`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .catch((error) => {
    return '빵';
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
/**
 * getHen()         //이렇게 받아오는 것이 한가지일 경우 줄일 수 있다
 *.then(getEgg)
 *.then(cook)
 *.then(console.log);
 */

//JS/CallBack/main.js 75줄부터 확인바람 거기에도 프로미스 내용이 있음

async function myFunc1() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('완료')), 1000;
  });
  console.log(promise);

  let result = await promise;
  console.log(promise);
  console.log(result);
}
myFunc1();

// 자바스크립트 12. 프로미스 개념부터 활용까지 JavaScript Promise | 프론트엔드 개발자 입문편 (JavaScript ES6) : https://www.youtube.com/watch?v=JB_yU6Oe2eE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=12
