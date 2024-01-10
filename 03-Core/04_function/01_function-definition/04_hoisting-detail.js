// 함수 선언문과 할당문의 차이
/* 
함수 선언문
프로그램의 흐름을 기준으로 생각한다.
1번
function test(){
    console.log("이거랑")
}

2번
function test(){
    console.log("이거 중에 어떤 것이 실행되는가?")
}

3번
var variable;

4번
test();

5번
console.log(variable);

6번
variable = "test";

*/

test();
console.log(variable);

// 함수 선언문
function test(){
    console.log("이거랑")
}

function test(){
    console.log("이거 중에 어떤 것이 실행되는가?")
}

var variable = "test"; // let은 이조차 참조를 막는다.

console.log(variable);

// ----------------------------------
// 프로그램을 여기서부터 실행된다고 생각하자.


// 함수 할당문
/* 
    1번
    var funTest;
    
    2번
    console.log(funTest);  -> undefined

    3번
    funTest = () => {
        console.log("1");
    }

    4번
    funTest(); -> 3번이 동작해서 "1"이 출력되고 return이 없기 때문에 undefined가 다음으로 출력됨(return으로 적당한 값을 넣어보면 확 티가 난다.)

    5번
    funTest = () => {
        console.log("2");
    }

    6번
    funTest(); -> 5번이 동작해서 "2"가 출력되고 return이 없기 때문에 undefined가 다음으로 출력됨
*/

console.log(funTest);

var funTest = () => {
    console.log("1");
}

console.log(funTest());

var funTest = () => {
    console.log("2");
}

console.log(funTest());



/* 자바스크립트의 let은 동일한 변수명을 생성할 수 없다.
let funTest = () => {
    console.log("2");
} */

// let은 중복 변수 선언이 불가능, var는 중복 선언이 가능(대신 마지막을 덮어 쓴다)

// 함수 선언문과 표현식

// 함수 선언문
function a (){

};

// 함수 할당식 중

// 익명 함수 표현식
const b = function(){};

// 기명 함수 표현식
const c = function d(){};

// 일회성 함수
(function (){
    console.log("이거 맞나?")
})();