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

const creatorMap = {
  h1: createH1,
  div: createDiv,
};

const coupler = (map) => (type, props) => map[type](props);
const createElement = coupler(creatorMap);

/**
 * coupler를 통해 creatorMap과의 의존성을 끊었고 외부로 제공하는 인터페이스는 그대로 유지되었다.
 */

document.querySelector('#root').appendChild(createElement('h1', {}));
document.querySelector('#root').appendChild(createElement('div', {}));
