console.log(a); //undefined
var a=10;
console.log(a); // 10

//console.log(b); //hoisting is not possible
// let b=10;
// console.log(b);

//if you want to use for callback you can use annonymous function
const test=function(){
    console.log('Test triggered');
}

//for debugging , for recursion, use named function
const myFunction=function test(){
    console.log('Test triggered');
}