// This is my first JS code
console.log('Hello World');

/* 
Variables
 - Make the variable name meaningful
 - Cannot contain a space or hyphen (-)
 - Case-sensitive 
 */
let firstName='Himat';
let lastName='Varsani';
console.log(firstName + " " + lastName);

/* 
Constants
 - A value of a Constants cannot change
*/
const interestRate = 0.3;
console.log(interestRate);

/*
Primitive Types
 - Strings
 - Number
 - Boolean
 - undefined
 - null
*/
let fName = 'Himat' // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstNames; // undefined
let selectedColor = null; // null is used to clear the value of a variable

/*
Dynamic Typing
typeof operator - check the type of a variable
Example: typeof fName --> This will return a "String"
name = 1 --> type of fName --> now, this will return a "number"
*/

/*
Objects

Reference Types
 - Object
 - Array
 - Function

 For example: A person object may include a name and age, so instead of declaring
 two variable as below, you can create an object
 let fname ='Himat';
 let age = 30;

 Keys = Properties of this object - i.e. person
 values = values within this object - i.e. name and age
*/
let person = {
    fNames: 'Himat',
    age: 30
}; // Object Literal
console.log(person);

// Dot Notation
person.fNames = 'John';
console.log(person.fNames);

// Bracket Notation - better if the user is selecting a name - drop down
person['fNames'] = 'Mary';
console.log(person.fNames);

/*
Arrays - Store a list of Objects 
typeof - "object"
*/
let selectedColors = ['red', 'blue']; // Square bracket - indicate an empty array
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);

selectedColors[2] = 'green';
console.log(selectedColors);

/*
Functions - A set of statements that performs a task or calculates a value
*/
function greet() {
    // Body of the function
    console.log('Hello World');
}

greet();

function greet(name) {//Parameter
    console.log('Hello ' + name);
}

greet('John'); //Argument
greet('Mary'); 

function greet(name, lastNames) {
    console.log('Hello ' + name + ' ' + lastNames);
}

greet('John', 'Smith');

//Calculating a value
function sqaureNum(number){
    return number * number
}

//let number = sqaureNum(2);
//console.log(number);
//or
console.log(sqaureNum(2)); // The 2 is passing the value of 2, so 2 x 2 = 4
