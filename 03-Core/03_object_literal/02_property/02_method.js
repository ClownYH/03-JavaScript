/* 
    자바스크립트의 함수는 객체이다.
    함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수 있다.
 */

let dog = {
    name : "뽀삐",
    eat : function(food) {
        // console.log(`${name}(은)는 ${food}를 맛있게 먹어요`);
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`)
    }
}

dog.eat("고구마");

// 화살표 함수는 이크마6부터 도입된 문법이다. 일반 function과 차이는 this가 어떤 것을 가리키냐이다.