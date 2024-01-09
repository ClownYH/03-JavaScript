// var를 사용하는 경우 : 스코프에 영향을 받지 않는다.
function test() {

    for(var i = 0; i <= 3; i++){

    }
    console.log(i);
}

test();

// let을 사용하는 경우 : 스코프에 영향을 받는다.
function test() {

    for(let i = 0; i <= 3; i++){

    }
    console.log(i);
}

test();