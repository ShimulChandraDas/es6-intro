// function declear
function add(num1, num2) {
    // const sum = num1 + num2;
    // return sum;

    /* advanced */
    return num1 + num2;
}


//function expression 
const add3 = function add(num1, num2) {

    return num1 + num2;
}

//function expression(anonymous)
const add2 = function (num1, num2) {

    return num1 + num2;
}

//arrow function
const add4 = (num1, num2) => num1 + num2

const sum1 = add2(12, 16);
const sum2 = add2(12, 16);
const sum3 = add2(12, 16);
const sum4 = add2(12, 16);


// multiple console logs
console.log(sum1, sum2, sum3, sum4);

// document.getElementById('my-btn').onclick = function handleEvent() {

// }

