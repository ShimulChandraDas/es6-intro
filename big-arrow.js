const add = (num1, num2) => num1 + num2

const multiply = (num1, num2) => num1 * num2;
const result = multiply(44, 12, 3);


const tenTimes = (num) => num * 10;
const output = tenTimes(17);


const fiveTimes = num => num * 5;
const value = fiveTimes(17);

// for strings 

const getName = () => 'Ullah pagla'
const name = getName()
//console.log(result, output, value, name)

// Multiline math operations in one functions 
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const output = sum * diff;
    const result = output * 5;
    return result;

}

console.log(doMath(12, 5));
// const total = doMath(12, 5);
// console.log(total);


document.getElementById('my-btn').addEventListener(event => {

})







