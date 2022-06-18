// createElement 함수 응용하기
function createH1(props) {
  return [document.createElement('h1')].map((element) => {
    Object.entries({ ...props, 'data-id': 'title' }).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );
    return element;
  })[0];
}
function createDiv(props) {
  return [document.createElement('div')].map((element) => {
    Object.entries({ ...props, 'data-id': 'layout' }).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );
    return element;
  })[0];
}

function createElement(type, props) {
  switch (type) {
    case 'h1':
      return createH1(props);
    case 'div':
      return createDiv(props);
  }
}

/**
 * 아까보다는 변경에 용이한 구조이다.
 * createH1 로직이 달라지면 createH1만 테스트하면 되기 때문이다.
 * 하지만 이 구조의 단점이 있다. 추가에 취약한 구조이다.
 * 이 상태에서 span 태그 추가 기능을 넣으면 createElement 코드가 수정되며 그와 상관없는 createH1과 createDiv 함수도 테스트를 해야한다.
 */

document.querySelector('#root').appendChild(createElement('h1', {}));
