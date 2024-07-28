//Question#1
function reverseArray(arr) {
    return arr.slice().reverse();
}

const smallArray = [1, 2, 3, 4, 5];
const reversedSmallArray = reverseArray(smallArray);
console.log("Reversed small array:", reversedSmallArray);

//Question#2
function filterOutNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

// Test with an array containing both negative and positive numbers
const mixedArray = [1, -2, 3, -4, 5, -6];
const filteredArray = filterOutNegativeNumbers(mixedArray);
console.log("Filtered array:", filteredArray); // Output: [1, 3, 5]

// Test with an array containing only negative numbers
const negativeArray = [-1, -2, -3, -4, -5];
const filteredNegativeArray = filterOutNegativeNumbers(negativeArray);
console.log("Filtered array with only negatives:", filteredNegativeArray); // Output: []

// Test with an array containing only positive numbers
const positiveArray = [1, 2, 3, 4, 5];
const filteredPositiveArray = filterOutNegativeNumbers(positiveArray);
console.log("Filtered array with only positives:", filteredPositiveArray); // Output: [1, 2, 3, 4, 5]


//Question#3
function countVowels(str) {
    // Define a set of vowels (both lowercase and uppercase)
    const vowels = 'aeiouAEIOU';
    // Initialize a count variable
    let count = 0;
    
    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Test with various strings

const testString1 = "Hello, World!";
console.log("Number of vowels in '" + testString1 + "':", countVowels(testString1)); // Output: 3

const testString2 = "Rhythms";
console.log("Number of vowels in '" + testString2 + "':", countVowels(testString2)); // Output: 0

const testString3 = "AEIOUaeiou";
console.log("Number of vowels in '" + testString3 + "':", countVowels(testString3)); // Output: 10


//Question#4
function isPalindrome(str) {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    // Check if the normalized string is equal to its reversed version
    return normalizedStr === reversedStr;
}

// Test with various strings

const teststring1 = "A man, a plan, a canal, Panama";
console.log("Is '" + teststring1 + "' a palindrome?", isPalindrome(teststring1)); // Output: true

const teststring2 = "Hello, World!";
console.log("Is '" + teststring2 + "' a palindrome?", isPalindrome(teststring2)); // Output: false

const teststring3 = "A";
console.log("Is '" + teststring3 + "' a palindrome?", isPalindrome(teststring3)); // Output: true

const teststring4 = "Was it a car or a cat I saw?";
console.log("Is '" + teststring4 + "' a palindrome?", isPalindrome(teststring4)); // Output: true


///Question#5
function isInRange(val1, val2) {
    // Define the range limits
    const lowerLimit = 50;
    const upperLimit = 99;
    
    // Check if either value falls within the range
    return (val1 >= lowerLimit && val1 <= upperLimit) || 
           (val2 >= lowerLimit && val2 <= upperLimit);
}

// Test with various values

console.log("Test 1 (55, 85):", isInRange(55, 85)); // Output: true
console.log("Test 2 (45, 75):", isInRange(45, 75)); // Output: true
console.log("Test 3 (30, 45):", isInRange(30, 45)); // Output: false
console.log("Test 4 (50, 99):", isInRange(50, 99)); // Output: true


///Question#6
function getMinValueAfterMapping(arr, mapFunction) {
    // Map each element in the array using the provided mapFunction
    const mappedArray = arr.map(mapFunction);
    
    // Find and return the minimum value from the mapped array
    return Math.min(...mappedArray);
}

// Test with various mapping functions

const numbers1 = [1, 2, 3, 4, 5];
const mapFunction1 = x => x * 2;
console.log("Minimum value after mapping:", getMinValueAfterMapping(numbers1, mapFunction1)); // Output: 2

const numbers2 = [3, 4, 5, 6];
const mapFunction2 = x => x ** 2;
console.log("Minimum value after mapping:", getMinValueAfterMapping(numbers2, mapFunction2)); // Output: 9

const numbers3 = [1, 2, 3, 4];
const mapFunction3 = x => -x;
console.log("Minimum value after mapping:", getMinValueAfterMapping(numbers3, mapFunction3)); // Output: -4

const numbers4 = [10, 20, 30];
const mapFunction4 = x => x - 10;
console.log("Minimum value after mapping:", getMinValueAfterMapping(numbers4, mapFunction4)); // Output: 0


///Question#7
function repeatLastThreeChars(str) {
    // Ensure the string length is at least 3
    if (str.length < 3) {
        throw new Error("String length must be 3 or more.");
    }
    // Extract the last 3 characters and repeat them 4 times
    return str.slice(-3).repeat(4);
}

// Test cases
const testCases = [
    { input: "ProductCode12345", expected: "345345345345" },
    { input: "ID987654321", expected: "321321321321" },
    { input: "XYZ", expected: "XYZXYZXYZXYZ" },
    { input: "Abc", expected: "bcbcbcbcb" }
];

// Run and display results for valid test cases
testCases.forEach(({ input, expected }) => {
    console.log(`Input: "${input}", Output: "${repeatLastThreeChars(input)}" (Expected: "${expected}")`);
});

// Test case with a string shorter than 3 characters to demonstrate error handling
try {
    console.log(repeatLastThreeChars("AB")); // Should throw an error
} catch (e) {
    console.error(e.message); // Output: "String length must be 3 or more."
}

//Question#8
function classifyAngle(degrees) {
    if (degrees < 0 || degrees > 180) {
        return "Invalid angle"; // Angle must be between 0 and 180 degrees
    } else if (degrees === 90) {
        return "Right angle";
    } else if (degrees === 180) {
        return "Straight angle";
    } else if (degrees < 90) {
        return "Acute angle";
    } else {
        return "Obtuse angle";
    }
}

// Test cases

console.log(classifyAngle(45)); // Output: "Acute angle"
console.log(classifyAngle(90)); // Output: "Right angle"
console.log(classifyAngle(120)); // Output: "Obtuse angle"
console.log(classifyAngle(180)); // Output: "Straight angle"
console.log(classifyAngle(-10)); // Output: "Invalid angle"
console.log(classifyAngle(200)); // Output: "Invalid angle"


///Question#9
function smallestRoundNumber(value) {
    // If the value is already a round number, return it
    if (value % 10 === 0) {
        return value;
    }
    
    // Compute the smallest round number greater than or equal to the given value
    const nextRoundNumber = Math.ceil(value / 10) * 10;
    
    return nextRoundNumber;
}

// Test cases
console.log(smallestRoundNumber(150)); // Output: 150 (already a round number)
console.log(smallestRoundNumber(152)); // Output: 160
console.log(smallestRoundNumber(199)); // Output: 200
console.log(smallestRoundNumber(1000)); // Output: 1000 (already a round number)
console.log(smallestRoundNumber(1025)); // Output: 1030



///Question#10
function findIndex(array, target) {
    // Iterate over the array using a for loop
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Test cases
const array = [10, 20, 30, 40, 50];

console.log(findIndex(array, 30)); // Output: 2
console.log(findIndex(array, 50)); // Output: 4
console.log(findIndex(array, 15)); // Output: -1 (not found)
