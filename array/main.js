// Sum of Array Elements
const array = [50, 20, 3];
const sumOfArrayElements = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumOfArrayElements(array));

// Find Min and Max in an array
const findMinMax = (array) => {
    let min = array[0];
    let max = array[0];
    for(let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i]
        }
    }
    return {min, max};
}
console.log(findMinMax(array));

// Reverse and Array
const reverseArray = (array) => {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
console.log(reverseArray(array));

// array divible by 2
const divisibleByNumber = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (!array[i] % 2 === 0) {
            array.pop(i);
        }
    }
    return array;
}
console.log(divisibleByNumber(array));

// Fibonacci Sequence - Next Element is Sum of Previous two number
const fibonnacciSequence = (number) => {
    // the first two element in sequence is 0 and 1
    const sequence = [0, 1];
    for (let i = 2; i < number; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
console.log(fibonnacciSequence(7));
console.log(fibonnacciSequence(10));

// Palindrome
const pallindromeCheck = (string) => {
    const stringLowerCase = string.toLowerCase();
    const array = stringLowerCase.split("");
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    const reverseString = array.join('').toLowerCase();
    if (reverseString === string.toLowerCase()) {
        console.log("String is a pallindrome")
    } else {
        console.log("String is not a pallindrome");
    }
   
}
pallindromeCheck("madam");
pallindromeCheck("TENet");