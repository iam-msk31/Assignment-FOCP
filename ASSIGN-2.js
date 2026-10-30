// Assignment 2: String and Array Problem-Solving Toolkit


// Tasks :


// 1. Store a student's name, roll number, department, and marks in five subjects using
// appropriate variables and data types.

function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
}

console.log(reverseString("hello"))

//Output : 
// olleh
// Time complexity: (O(n)) .



// 2. Write a function to check whether a string is a palindrome.

function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return str === reversed;
}

console.log(isPalindrome("madam"));
//Output : 
// true
console.log(isPalindrome("hello"));
//Output : 
// false

//// Time complexity: (O(n)) .

// 3. Write a function to count vowels and consonants in a string.
function countVowelsConsonants(str) {
    let vowels = 0;
    let consonants = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (ch >= "a" && ch <= "z") {
            if (
                ch === "a" || ch === "e" ||
                ch === "i" || ch === "o" ||
                ch === "u"
            ) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log("Vowels:", vowels);
    console.log("Consonants:", consonants);
}

countVowelsConsonants("Hello World");

//Output : 
//Vowels: 3
//Consonants: 7

// Time complexity: (O(n)) .


// 4. Write a function to find the second-largest distinct number in an array.

function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (
            arr[i] > second && arr[i] < largest
        ) {
            second = arr[i];
        }
    }

    if (second === -Infinity) {
        return undefined;
    }

    return second;
}

console.log(secondLargest([10, 5, 20, 8, 20]));

//Output: 
// 10
// Time complexity: (O(n)) .


// 5. Write a function to remove duplicate elements from an array without using Set.


function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                found = true;
                break;
            }
        }

        if (found === false) {
            result[result.length] = arr[i];
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));

//Output: 
// [ 1 ,2 ,3 ]
//Time complexity: (O(n^2))

// 6. Write a Function to ffind the sum of a given element in an array.

function sumEven(arr){
    let sum =0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]%2===0){
            sum=sum+arr[i];
        }
    }
    return sum;
}

console.log("Sum : ",sumEven([1,2,3,4,5,6]))

//Output : 
// Sum : 12
//Time complexity: (O(n)).

// 7. Write a function to find the frequency ofa given element in an arrray.

function frequency(arr,element){
    let count = 0;

    for(let i=0;i< arr.length;i++){
        if(arr[i]=== element){
            count++
        }
    }
    return count;
}
console.log(frequency([1,2,2,3,2,4],2));

//Output ; 
// 2
//Time complexity: (O(n)).

// 8. Write a function to check whether two strings are anagram.

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");

    if (str1.length !== str2.length) {
        return false;
    }

    let count = {};

    for (let i = 0; i < str1.length; i++) {
        let ch = str1[i];
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let ch = str2[i];

        if (!count[ch]) {
            return false;
        }

        count[ch]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

//Output : 
// true
// false
// Time complexity: (O(n+m))


//  9. Write a function to move all zeros to the end of an array while maintaining the
// order of non-zero elements

function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            result[result.length] = arr[i];
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        result[result.length] = 0;
    }

    return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));

//Output :
// [ 1, 3, 12, 0, 0 ]
// Time complexity: (O(n)).