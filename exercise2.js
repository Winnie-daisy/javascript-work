//the year today
let today = new Date();
let year = today.getFullYear();
console.log(year);

//What is the month today as a number? (Note: JavaScript returns months as 0-11, so we add 1)
let month = today.getMonth() + 1;
console.log(month);

//What is the date today?
let date = today.getDate();
console.log(date);

//What is the day today as a number? (0 = Sunday, 1 = Monday, tuesday = 3.)
let day = today.getDay();
console.log(day);

//What is the hours now?
let hours = today.getHours();
console.log(hours);

//What is the minutes now
let minutes = today.getMinutes();
console.log(minutes);

//Find out the numbers of seconds elapsed from January 1, 1970 to now
let secondsElapsed = Math.floor(today.getTime() / 1000);
console.log(secondsElapsed);

// Calculate the area of the triangle
// Prompt the user to enter base and height of the triangle
let base = prompt("Enter base:");
let height = prompt("Enter height:");
// Calculate the area of the triangle
let area = 0.5 * base * height;
// Display the result
console.log(`The area of the triangle is ${area}`);

//Calculate the perimeter of a triangle:
// Prompt the user to enter the sides of the triangle
let sideA = prompt("Enter side a:");
let sideB = prompt("Enter side b:");
let sideC = prompt("Enter side c:");

// Calculate the perimeter of the triangle
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);

// Display the result
console.log(`The perimeter of the triangle is ${perimeter}`);



//Calculate Area and Perimeter of a Rectangle
function calculateRectangle() {
    let length = prompt("Enter length:");
    let width = prompt("Enter width:");
    let area = length * width;
    let perimeter = 2 * (length + width);
    console.log(`The area of the rectangle is ${area}`);
    console.log(`The perimeter of the rectangle is ${perimeter}`);
}

calculateRectangle();

//Calculate the area and Circumference of a Circle
function calculateCircle() {
    const pi = 3.14;
    let radius = prompt("Enter radius:");
    let area = pi * radius * radius;
    let circumference = 2 * pi * radius;
    console.log(`The area of the circle is ${area}`);
    console.log(`The circumference of the circle is ${circumference}`);
}

calculateCircle();

//Calculate Slope, x-Intercept, and y-Intercept of y = 2x - 2
function linearEquation() {
    const slope = 2;
    const yIntercept = -2;
    const xIntercept = -yIntercept / slope;
    console.log(`The slope of the equation y = 2x - 2 is ${slope}`);
    console.log(`The x-intercept of the equation is ${xIntercept}`);
    console.log(`The y-intercept of the equation is ${yIntercept}`);
}

linearEquation();


//Calculate Slope between Points (2, 2) and (6, 10)
function calculateSlope() {
    const x1 = 2, y1 = 2;
    const x2 = 6, y2 = 10;
    const slope = (y2 - y1) / (x2 - x1);
    console.log(`The slope between points (2, 2) and (6, 10) is ${slope}`);
}

calculateSlope();

//Compare the Slopes
const slope1 = 2; // From the equation y = 2x - 2
const slope2 = (10 - 2) / (6 - 2); // Between points (2, 2) and (6, 10)

if (slope1 === slope2) {
    console.log("The slopes are the same.");
} else {
    console.log("The slopes are different.");
}

//Calculate the Value of y (y = x^2 + 6x + 9) for Different x Values and Find x When y is 0
function calculateY(x) {
    return x * x + 6 * x + 9;
}

const xValues = [-3, 0, 1, -1, 2, -2, -5];
xValues.forEach(x => {
    const y = calculateY(x);
    console.log(`For x = ${x}, y = ${y}`);
});

// Finding x when y = 0
function findXForYZero() {
    const a = 1, b = 6, c = 9;
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`Solutions for y = 0: x = ${x1}, x = ${x2}`);
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        console.log(`Solution for y = 0: x = ${x}`);
    } else {
        console.log("No real solutions for y = 0.");
    }
}

findXForYZero();




//Calculate Weekly Earning
function calculatePay() {
    let hours = prompt("Enter hours:");
    let rate = prompt("Enter rate per hour:");
    let earning = hours * rate;
    console.log(`Your weekly earning is ${earning}`);
}

calculatePay();

//Check Length of Name
function checkNameLength(name) {
    if (name.length > 7) {
        console.log("Your name is long");
    } else {
        console.log("Your name is short");
    }
}

let name = prompt("Enter your name:");
checkNameLength(name);

//Compare First Name and Family Name Lengths
function compareNameLengths(firstName, lastName) {
    if (firstName.length > lastName.length) {
        console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}`);
    } else if (firstName.length < lastName.length) {
        console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}`);
    } else {
        console.log(`Your first name, ${firstName}, is the same length as your family name, ${lastName}`);
    }
}

let firstName = 'Doctors';
let lastName = 'Strange';
compareNameLengths(firstName, lastName);



function checkDrivingEligibility() {
    const currentYear = new Date().getFullYear();
    const birthYear = prompt("Enter birth year:");
    const age = currentYear - birthYear;

    if (age >= 18) {
        console.log(`You are ${age}. You are old enough to drive.`);
    } else {
        const yearsToWait = 18 - age;
        console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
    }
}

checkDrivingEligibility();



//Calculate the Number of Seconds a Person Can Live
function calculateSecondsLived() {
    const secondsInYear = 365 * 24 * 60 * 60;
    let years = prompt("Enter number of years you live:");
    let secondsLived = years * secondsInYear;
    console.log(`You lived ${secondsLived} seconds.`);
}

calculateSecondsLived();

//Create a Human Readable Time Format Using the Date Object
function formatDateTime() {
    const now = new Date();

    // Format 1: YYYY-MM-DD HH:mm
    let formattedDate1 = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    console.log(formattedDate1);

    // Format 2: DD-MM-YYYY HH:mm
    let formattedDate2 = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    console.log(formattedDate2);

    // Format 3: DD/MM/YYYY HH:mm
    let formattedDate3 = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    console.log(formattedDate3);
}

formatDateTime();



function formatDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Format: YYY-MM-DD HH:mm
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    console.log(formattedDateTime);
}

formatDateTime();



