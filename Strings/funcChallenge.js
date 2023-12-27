// Function 1
const getCelsius = (fahr) => (fahr - 32) * 5 / 9;
console.log(getCelsius(194));

// Function 2
const minMax = (arr) => ({min: Math.min(...arr), max: Math.max(...arr)});
console.log(minMax([1, 2, 3, 4]));

// Function 3
(function (len, wid) {
    const area = len * wid;
    const output = `The area of the rectangle with a length of ${len} and a width of ${wid} is ${area}.`;
    console.log(output);
})(10, 5);