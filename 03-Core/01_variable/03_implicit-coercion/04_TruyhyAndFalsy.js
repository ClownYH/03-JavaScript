// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

let test1;

console.log(!!test1); // falsy -> true(!로 boolean 타입으로 변환됨) -> false

let test = {
    a : null,
    b : 1,
    fun(){
        console.log("asdasdasd");
    }
};

// test라는 객체의 프로퍼티에 b의 값이 존재해?
if(test?.b){ // ?는 객체타입에만 사용할 수 있는 문법(그 값이 존재한다면 참조하겠다)
    console.log("true");
}else{
    console.log("false");
}

// test라는 객체의 프로퍼티 b의 값이 존재하는 경우
console.log(test.b && "a");
console.log("==========")
test.b ?  console.log("true") : console.log("false");

console.log("--------------------");

test.fun();
test?.fun();