// promise는 주로 생성자 함수로 사용되지만 함수도 객체이므로 메소드를 가질 수 있다.

// 1. Promise.all
// promise.all 메소드는 여러 개의 비동기 처리를 모두 병렬처리할 때 사용한다.

const requestData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const requestData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const requestData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 3000));

const result = [];
// requestData1()
//   .then((data) => {
//     result.push(data);
//     console.log('requestData1 종료');
//     return requestData2();
//   })
//   .then((data) => {
//     result.push(data);
//     console.log('requestData2 종료');
//     return requestData3();
//   })
//   .then((data) => {
//     result.push(data);
//     console.log(result);
//   });

/**
 * 위 예제는 세 개의 비동기 처리를 순차적으로 처리하게 되면 첫번째 비동기 1초, 두번째 비동기 2초, 세번째 비동기 3초 총 6초 이상이 소요된다.
 * 그런데 위 예제의 경우 세 개의 비동기 처리는 서로 의존하지 않고 개별적으로 수행된다.
 * 따라서 위 예제는 Promise.all 메소드를 사용하여 비동기 처리를 모두 병렬 처리하는 것이 좋다.
 */

Promise.all([requestData1(), requestData2(), requestData3()])
  .then((res) => console.log(res)) // (3초 이후) [1,2,3]
  .catch(console.error);

/**
 * promise.all 메소드는 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다.
 * 그리고 모든 프로미스가 모두 fulfilled 상태가 되면 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다.
 * 위 예제의 경우 3초가 지난 후 모든 처리 결과를 배열에 반환하여 [1,2,3] 이라는 결과값이 나온다.
 * 또한 promise.all 은 처리 순서가 보장된다. 첫번째 requestData1이 만약 5초가 걸린다해도 [1,2,3] 으로 반환이 된다.
 * 또한 인수로 절달받은 배열의 프로미스가 하나라도 rejected 상태가 되면 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료된다.
 */

Promise.all([
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error 1')), 1000)
  ),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error 2')), 2000)
  ),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error 3')), 3000)
  ),
])
  .then(console.log)
  .catch(console.error); // (1초 이후) Error: Error 1
