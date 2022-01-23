// 1. Date.now()
// 1970 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과한 밀리초를 반환한다.
Date.now(); //1642909676562 (2022-01-23 12:48분 경)

// 2. Date.parse()
// 1970 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다.
Date.parse('Jan 2, 1970 00:00:00 UTC'); // 86400000
Date.parse('Jan 2, 1970 00:00:00'); // 86400000 KST이므로 9시간 더 빠르다
Date.parse('1970/01/02/09:00:00'); // 86400000

// 3. 현재 시간을 각각의 단위로 보여주기

const today = new Date();

today.getFullYear(); // 2022
today.setFullYear(2000); // 직접 설정할수도 있다.

today.getMonth(); // 0 객체의 월을 나타내는 0~11의 정수를 반환한다 1월은 0, 12월은 11이다
today.setMonth(4); // 직접 설정할수도 있다.

today.getDate(); // 23 객체의 날짜(1~31)을 나타내는 정수를 반환한다.
today.setDate(12); // 직접 설정할수도 있다.

today.getDay(); // 0 객체의 요일(0~6)을 나타내는 정수를 반환한다. 일요일부터 시작하며 토요일은 6을 반환한다.

today.getHours(); // 12 객체의 시간(0~23)을 나타내는 정수를 반환한다.
today.setHours(0); // 직접 설정할수도 있다.

today.getMinutes(); // 객체의 분(0~59)을 나타내는 정수를 반환한다.
today.setMinutes(20); // 직접 설정할수도 있다.

today.getSeconds(); // 객체의 초(0~59)를 나타내는 정수를 반환한다.
today.setSeconds(10, 000); // 직접 설정할수도 있다. 밀리초도 지정가능하다.

today.getMilliseconds(); // 객체의 밀리초(0~999)를 나타내는 정수를 반환한다.
today.setMilliseconds(); // 직접 설정할수도 있다.

// 그 외에 메소드는 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date 를 참고할 것
