'use strict'
/* function doubleEvenNumbers(numbers) {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        newNumbers.push(numbers[i] * 2);
      }
    }
    return newNumbers;
  }
  
  const myNumbers = [1, 2, 3, 4];
  console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console */

const myNumbers = [1, 2, 3, 4];

function checkEven(number) {
    return number % 2 === 0;
}

function double(number) {
    return number * 2;
}

function doubleEvenNumbers(myNumbers) {
    const evenNumbers = myNumbers.filter(checkEven);
    const result = evenNumbers.map(double);
    return result;
}
console.log(doubleEvenNumbers(myNumbers));