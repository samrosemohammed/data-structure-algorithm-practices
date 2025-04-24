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

// Palindrome - String which is same from both backward and forward
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

// Leaders in an Array - An element is a leader when it is greater than or equal to all its element on the right hand side.
// Find all the leader in an array.
const arrayForLeader = [16, 17, 2, 8, 3, 2];
const findLeader = (array) => {
    let leaders = [];
    let maxFromRight = array[array.length - 1];
    for (let i = array.length - 1; i >= 0; i--) {
       if (array[i] >= maxFromRight) {
        maxFromRight = array[i];
        leaders.push(array[i]);
       }
    }
    // reverse the array
    for(let i = 0; i < leaders.length / 2; i++) {
        let temp = leaders[i];
        leaders[i] = leaders[leaders.length - 1 - i]
        leaders[leaders.length - 1 - i] = temp;
    }
    return leaders;
}
console.log(findLeader(arrayForLeader));

// Min Max Sum in Array
const minMaxSum = (array) => {
    let min = array[0];
    let max = array[0];
    let total = 0;
    let totalMinSum = 0;
    let totalMaxSum = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i]
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
        totalMinSum = total - min;
        totalMaxSum = total - max;
    }
    return {min, max, totalMinSum, totalMaxSum};
}
console.log(minMaxSum([1,3,5,7,9]))

// Find factorail of n number
const findFactorial = (number) => {
    let factorail = 1;
    for (let i=1; i <= number; i++) {
        factorail *= i;
    }
    return factorail;
}

console.log(findFactorial(4))