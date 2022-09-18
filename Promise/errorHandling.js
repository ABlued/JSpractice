/**
 * 비동기 처리 결과에 대한 후속 처리는 프로미스가 제공하는 후속 처리 메서드 then, catchm finally를 사용하여 수행한다.
 * 비동기 처리에서 발생한 에러는 then 메서드의 두 번째 콜백 함수로 처리할 수 있다.
 */

const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

const wrongUrl = 'wrongUrl';

promiseGet(wrongUrl).then(
  (res) => console.log(res),
  (err) => console.error(err)
); // Error : 404

// 비동기 처리에서 발생한 에러는 프로미스의 후속 처리 메서드 catch를 사용해 처리할 수도 있다.

promiseGet(wrongUrl)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// catch 메서드를 호출하면 내부적으로 then(undefined, onRejected)를 호출한다. 따라서 catch 메서드를 사용한 것은 내부적으로
// 다음과 같이 처리된다.

promiseGet(wrongUrl)
  .then((res) => console.log(res)) // 아래 then의 두 번째 콜백 함수는 이 메서드의 에러를 캐치해내지 못한다.
  .then(undefined, (err) => console.error(err));

// 위 예제의 문제점은 then 메서드의 두 번째 콜백함수는 첫 번째 콜백 함수에서 발생한 에러를 캐치하지 못하고 코드가 복잡해져 가독성이 좋지 않다.

promiseGet(wrongUrl)
  .then((res) => console.xxx(res))
  .catch((err) => console.error(err)); // TypeError : console.xxx is not a function

// catch 메서드를 모든 then 메서드를 호출한 이후에 호출하면 비동기 처리에서 발생한 에러 (rejected 상태)뿐만 아니라
// then 메서드 내부에서 발생한 에러까지 모두 캐치할 수 있다.

// 또한 then 메서드의 두 번째 콜백 함수를 전달하는 것보다 catch 메서드를 사용하는 것이 가독성이 좋고 명확하기 때문에
// 프로미스의 에러 처리는 catch 메서드를 사용하는 것이 좋다.
