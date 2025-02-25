
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











