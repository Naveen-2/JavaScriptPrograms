const prompt = require('prompt-sync')();
let a = Math.floor(Math.random() * 900) + 100;
let b = Math.floor(Math.random() * 900) + 100;
let c = -(a + b);

let numberArray = new Array()

numberArray.push(a);
numberArray.push(b);
numberArray.push(c);

let total = 0;
numberArray.forEach(sum);

function sum(num) {
    total = total + num
}
console.log("Sum of " + a + " + " + b + " + (" + c + ")=  " + total);