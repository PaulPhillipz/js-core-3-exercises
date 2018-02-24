// Function example
var numToChange = 3;
var anotherNum = 2;
var result;                 // undefinded
var anotherResult;          // undefined

// function to Add
function plusFive(num){
    return num + 5
}

console.log(result) 
// Here the output would be undefined

var result = 2;
// variable result is updated

console.log(result) 
// Here the output would be 2
// When a js file is loaded, the browser scans through the whole file to see what functions there are.
// But it can only use them in the order that they are called.

// function to Multiply
function timesTwo(num){
    return num * 2
}

// now call the functions, one after the other.
result = plusFive(numToChange);     // returns 8
result = timesTwo(result);          // returns 16

// let us see what it returned
console.log(result)
// Here the output would be 16


// ==========================================================================================
// Example 2
anotherResult = timesTwo(anotherNum);
console.log(anotherResult);         // shows 4


// ==========================================================================================
// Example 3
function addNumbers(a,b)
{
    return a + b
}

var answer = addNumbers(2,3);        // call the above function

console.log(answer);                 // console.log let's us check the current state of a variable, Here it will show 5.

console.log(addNumbers(4,5));        // here we call the function within a console.log. It will show 9.


// ==========================================================================================
// Example 4
var waitTimer = setTimeout(function(){ console.log('Thanks for waiting') }, 5000);
// After 5 seconds, the console.log will appear.

// Example 5
var timer2 = setTimeout(function(){ 
    num = plusFive(10);
    console.log(num);
  }, 5000);
// After 5 seconds, the console.log will appear showing 15.