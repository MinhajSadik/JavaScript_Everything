// higher order function example
function hello() {
    return function(){
        console.log('hello world!');
    }
}

hello()();
