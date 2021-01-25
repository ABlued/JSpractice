// 1. 배열안에 있는 모든 요소들을 String으로 변환하기 
const fruits = ['apple','banana','orange'];
const result = fruits.join('');   //구분자가 없으면 default로 구분자 ,이 들어간다. 구분자를 안넣을려면 ''을 매개인자에 넣으면 되고, 구분자를 임의설정하고 싶으면 매개인자에 넣으면 된다.
console.log(result);

//2. String을 배열로 변환하기
const fruits1 = 'apple,banana,melon,cherry';
const result1 = fruits1.split(',');     //첫번째 매개인자는 구분자이다. 두번째 매개인자는 몇개까지 읽어올것이냐를 정하는 것이다.
console.log(result1);

//3. 배열을 거꾸로 정렬하기

const array2 = [1,2,3,4,5];
console.log(array2.reverse());        //reverse함수는 거꾸로 정렬한 배열을 반환해줄 뿐만 아니라 입력한 배열도 거꾸로 정렬하게 만든다.

//4. 0번째,1번째 인덱스 지우기
const array3 = [1,2,3,4,5];
const result3 = array3.slice(2,5);      //2,3,4번째 인덱스가 반환된다.
console.log(result3);
console.log(array3);                    //splice함수는 원래 배열도 변하게 되지만 이 함수는 원래 배열은 변하지 않는다는 차이가 있다.

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    };
}
const students = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88)
];

//5. 90점 이상에 학생을 찾기
const result4 = students.find(function(student, index){
    return student.score === 90;        //콜백함수는 true값이 나오면 멈추게 된다.
})
//const result4 = students.find((student) => student.score === 90); 과도 같다

//6. 수업에 등록한 학생들만 골라내어 배열만들기
const result5 = students.filter((students) => students.enrolled);
console.log(result5);

//7. 점수만 받아내서 배열로 만들기 [45, 80, 90, 66, 88];
const result6 = students.map((student) => student.score);       //배열안에 들어있는 모든 요소들을 가공되어진 요소들로 바꿔 새로운 배열에 차례대로 집어넣는다.
console.log(result6);

//8. 학생들 중에 50점 이하가 있는지 확인하기
const result7 = students.some((student) => student.score < 50);     //하나도 만족한 사항이 있으면 true를 반환하는 함수
const result8 = students.every((student) => student.score < 50);     //모두가 조건식에 만족해야만 true를 반환하는 함수

//9. 학생들의 평균점수를 구해오기
const result9 = students.reduce((prev, curr) =>{        //prev는 함수를 돌때마다 계속 리턴되는 값,curr는 현재 요소이다.

    console.log(prev);
    return prev + curr.score;
}, 0);      //초기값
console.log(result9 / students.length);

//10. 모든 학생들의 점수를 string으로 바꾸기
const result10 = students.map((student) => student.score).join();
console.log(result10);

//11. 학생 중 50점 이상인 학생의 점수만 string으로 바꾸기
const result11 = students.map((student) => student.score).filter((score) => score >= 50).join();
console.log(result11);

//12. 학생들의 점수들을 정렬해서 string으로 바꾸기
const result12 = students.map((student) => student.score).sort().join();        //이렇게 해도 되지만
console.log(result12);

const result13 = students
    .map((student) => student.score)
    .sort((a,b) => a - b)       //거꾸로 정렬하고 싶다면 .sort((a,b) => b - a)
    .join();
    console.log(result13);