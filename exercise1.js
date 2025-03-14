
// Exercise 1
console.log(4 > 3);           // true
console.log(4 >= 3);          // true
console.log(4 < 3);           // false
console.log(4 <= 3);          // false
console.log(4 == 4);          // true
console.log(4 === 4);         // true
console.log(4 != 4);          // false
console.log(4 !== 4);         // false
console.log(4 != '4');        // false
console.log(4 == '4');        // true
console.log(4 === '4');       // false

console.log(!("dragon".includes("on") && "python".includes("on"))); // false

//declare a variable 

let myAge = 250;
let yourAge = 25;
let ageDiff = myAge - yourAge;
let sentence = "I am "+ageDiff+" older than you ";
console.log(sentence);

//

// declaring the variable name chalenge
let challenge = '30 Days Of JavaScript';
console.log(challenge);
//length of the string
console.log(challenge.length);
//uppercase
console.log(challenge.toUpperCase());
//lowercase
console.log(challenge.toLowerCase());
//substring
console.log(challenge.substring(0, 2));
//Slice out the phrase "Days Of JavaScript" from "30 Days Of JavaScript":
console.log(challenge.substring(3));
//Check if the string contains a word "Script" using includes() method
console.log(challenge.includes('Script'));
//Split the string into an array using split() method
console.log(challenge.split());
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method
let newChallenge = challenge.replace('JavaScript', 'Python');
console.log(newChallenge);
//Get the character at index 15 in '30 Days Of JavaScript' string using charAt() method
console.log(challenge.charAt(15)); // Output: "S"
//Get the string character code of the first character of the string using charCodeAt()
console.log(challenge.charCodeAt(0)); // Output: 51
//Use indexOf to determine the position of the first occurrence of 'a' in '30 Days Of JavaScript':
console.log(challenge.indexOf('a')); // Output: 12
//Use lastIndexOf to determine the position of the last occurrence of 'a' in '30 Days Of JavaScript':
console.log(challenge.lastIndexOf('a')); // Output: 17
//Use indexOf to find the position of the first occurrence of the word 'because' in the sentence
let sentences = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentences.indexOf('because')); // Output: 31
//Use lastIndexOf to find the position of the last occurrence of the word 'because' in the sentence:
console.log(sentences.lastIndexOf('because')); // Output: 47
//Use search to find the position of the first occurrence of the word 'because' in the sentence
console.log(sentences.search('because')); // Output: 31
//Use trim() to remove any trailing whitespace at the beginning and the end of a string (e.g. ' 30 Days Of JavaScript ')
let whiteSpace = ' 30 Days Of JavaScript ';
console.log(whiteSpace.trim());


//Use startsWith() method with the string '30 Days Of JavaScript' and make the result true:
console.log(challenge.startsWith('30')); // Output: true
//Use endsWith() method with the string '30 Days Of JavaScript' and make the result true
console.log(challenge.endsWith('JavaScript')); // Output: true
//Use match() method to find all the a's in 30 Days Of JavaScript
console.log(challenge.match(/a/g)); // Output: ["a", "a", "a"]
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript':
let part1 = '30 Days of';
let part2 = ' JavaScript';
console.log(part1.concat(part2)); // Output: "30 Days of JavaScript"
//Use repeat() method to print '30 Days Of JavaScript' 2 times:
console.log(challenge.repeat(2)); // Output: "30 Days Of JavaScript30 Days Of JavaScript"


// To check if typeof '10' is exactly equal to 10, we need to convert the string '10' to a number:
if (typeof '10' === typeof 10) {
    console.log('They are exactly equal');
} else {
    console.log('They are not exactly equal');
    let num = Number('10');
    console.log(num); // Now it is exactly equal
}
//To check if parseFloat('9.8') is equal to 10, we need to round it to the nearest integer:
let num = parseFloat('9.8');
if (num === 10) {
    console.log('They are equal');
} else {
    console.log('They are not equal');
    num = Math.round(num);
    console.log(num); // Now it is exactly equal to 10
}
//To check if 'on' is found in both 'python' and 'jargon':
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes('on') && word2.includes('on')); // true
//To check if 'jargon' is in the sentence "I hope this course is not full of jargon":
let sentence1 = "I hope this course is not full of jargon";
console.log(sentence1.includes('jargon')); // true

//To generate a random number between 0 and 100 inclusively:
let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

//Generate a random number between 50 and 100 inclusively:
const randomNum50to100 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum50to100);

//Generate a random number between 0 and 255 inclusively
const randomNum0to255 = Math.floor(Math.random() * 256);
console.log(randomNum0to255);

//Access the 'JavaScript' string characters using a random number:
const str = 'JavaScript';
const randomIndex = Math.floor(Math.random() * str.length);
const randomChar = str[randomIndex];
console.log(randomChar);



//Use console.log() and escape characters to print the following pattern:
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//Use substr to slice out the phrase "because because because" from the following sentence:
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
let phrase = sentence2.substr(31, 23); // 31 is the starting index and 23 is the length of the phrase
console.log(phrase); // Output: "because because because"


//Declare firstName, lastName, country, city, age, isMarried, year variables and check their data types:
let firstName = "Winnie";
let lastName = "Daisy";
let country = "Uganda";
let city = "Kampala";
let age = 22;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

//Check if the type of '10' is equal to 10:
console.log(typeof '10' === typeof 10); // false

//Check if parseInt('9.8') is equal to 10:
console.log(parseInt('9.8') === 10); // false

//Boolean value is either true or false:
console.log(true); // true
console.log(false); // false

//Write three JavaScript statements which provide truthy values:
console.log(1); // truthy
console.log('hello'); // truthy
console.log({}); // truthy (empty object)

//Write three JavaScript statements which provide falsy values:
console.log(0); // falsy
console.log(''); // falsy (empty string)
console.log(null); // falsy















