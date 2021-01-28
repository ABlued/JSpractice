class Counter{
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(runIf5Times){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0 && this.callback){
            this.callback(this.counter);
        }
    }
}

const coolCounter = new Counter(printSomething);
function printSomething(num){
    console.log(`yo ${num}`);
}

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();


// 자바스크립트 기초 4. 클래스 | 클래스 예제와 콜백 함수 최종 정리 :https://www.youtube.com/watch?v=fU25vI0EOOk&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=18