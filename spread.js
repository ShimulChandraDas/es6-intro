const numbers = [23, 65, 99, 21, 34];
// console.log(numbers); //returen strings
// console.log(...numbers); //retuirn numbers

// return min numbers 
// const min = Math.min(23, 99, 65);
// console.log(min);

// return max numbers 
const max = Math.max(23, 99, 65, 21, 34);
const maxInArry = Math.max(...numbers);
//console.log(max, maxInArry);

// numbers.push(55)
// console.log(numbers)

const numbers2 = [...numbers]
const numbers3 = [10, ...numbers, 4000]
numbers.push(55)
console.log(numbers)
console.log(numbers2)
console.log(numbers3)


