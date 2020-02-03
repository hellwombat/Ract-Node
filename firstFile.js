//Hoisting, excuting before declaring.
greetingsTwo();

const greetings = (greeting) => {
    console.log(greeting);

};
function greetingsTwo(){
    console.log('greeting');

};
greetings('goat');