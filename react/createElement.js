// createElement 함수 응용하기
function createElement(type, props) {
  switch (type) {
    case 'h1':
      return [document.createElement('h1')].map((element) => {
        Object.entries({ ...props, 'data-id': 'title' }).forEach(
          ([name, value]) => element.setAttribute(name, value)
        );
        return element;
      })[0];
    case 'div':
      return [document.createElement('div')].map((element) => {
        Object.entries({ ...props, 'data-id': 'layout' }).forEach(
          ([name, value]) => element.setAttribute(name, value)
        );
        return element;
      })[0];
  }
}
/**
 * 이 함수 로직은 구조가 잘못되었다.
 * 그 이유는 만약 switch case h1 태그 생성 로직이 달라지면 div 생성 로직은 달라지지 않았음에도 불구하고
 * div 생성 로직도 같이 테스트를 해야 한다.
 * 특정 부분만 수정을 하였는데 그 부분만 테스트하기 어려운 구조다. 즉 변경에 용이하지 않은 구조다,
 * 이럴 경우 h1, div 를 나누고 각각 테스트할 수 있게 해줘야 한다.
 */

document.querySelector('#root').appendChild(createElement('h1', {}));
