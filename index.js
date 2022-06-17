// Sort method - sorts the items in an array in ascending or descending order

const numbers = [1, 3, 5, 15, 25, -9];

const sortedArray = numbers.sort( (a, b) => a - b);

// ! For decreasing
// const sortedArray = numbers.sort( (a, b) => b - a);

console.log(sortedArray);