'use strict';

//자바스크립트는 동기적인 언어이다.
//호이스팅이 된 이후로부터 코드는 내가 작성한 순서로 실행된다.
//호이스팅 : var, 함수의 선언은 자동적으로 위로 선언된다.
console.log('1');       //실행 순서 1
//비동기는 언제 실행되지 모르는 것들이다 예로 들면 setTimeout()
setTimeout(() => console.log('2'),1000);       //실행 순서 4        //이 함수가 실행될려면 1초가 필요한데 그 시간을 기다리지 않고 바로 다음 코드를 실행한다. 이것이 비동기이다.
console.log('3');       //실행 순서 2

//동기 콜백
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));       //실행 순서 3

//비동기 콜백
function printWitdhDelay(print, timeout){
    setTimeout(print, timeout);
}
printWitdhDelay(() => console.log('async callback.'),2000);       //실행 순서 5


//콜백 지옥 체험
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({ name: 'ellie', role: 'admin'});
            } else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = propmt('enter your id');
const password = propmt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);