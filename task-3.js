// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(numbers, size) {
    let sum = 0;
    let avg
    for (const number of numbers) {
        sum = sum + number
        avg = sum / size;
    }
    return avg;

}

const numbers = [34, 56, 78, 97, 43, 67, 89, 100];
const size = numbers.length;
const average = make_avg(numbers, size);
console.log(average);