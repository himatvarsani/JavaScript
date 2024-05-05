// Arithmetic Operators - - To perform calculation
let x = 10;
let y = 3;

console.log(x + y); // Expression - produces a value
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // x to the power of y

// Increment (++)
let z = 10
console.log(++z); // Output 11
console.log(z++); // Output 10

// Decrement (--)
console.log(--z); // Output 9

// Assignment Operators
let i = 10;
i += 5;
i *= 3;
console.log(i);

// Comparison Operators
let b = 1;
console.log(b > 0);
console.log(b >= 1);
console.log(b < 1);
console.log(b <= 1);

// Equality Operators
let c = 1;
console.log(c === 1); // Equal to ===
console.log(c !== 0); // Not equal to !==

// Strict Equality (Same Type + Value) -- (MOSTLY USED)
console.log(1 === 1); // Output true
console.log('1' === 1); // Output false

// Lose Equality (Value is equal)
console.log(1 == 1);
console.log('1' == 1); // It will look at the value left-side, here it is a string,
//so it will automatically to a string - Output is true

// Ternary Operator
/* If a customer has more than 100 points, they are a 'gold' customer, otherwise,
they are a 'silver' customer */

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type)

// Logical Operators

/* 
Logical AND (&&)
Returns TRUE if both operands are TRUE
*/
console.log(true && true);
console.log(false && true);

/*
Example: Apply for a loan and want to check if high income AND good
credit score
*/
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

/* 
Logical OR (||)
Returns TRUE if ONE of the operands are TRUE
*/
let highIncomes = false;
let goodCreditScores = false;
let eligibleForLoans = highIncomes || goodCreditScores;

console.log('Eligible', eligibleForLoans);

// NOT (!)
let applicationRefused = !eligibleForLoans;
console.log('Application Refused', applicationRefused);

// Logical Operators with Non-booleans
/*
Falsy (false)
underfined
null
0
false
''
NaN

Anything that is not Falsy -> Truthy
*/

let userColor = 'red'; // if user Color is undefined than output will be blue
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

/*
Bitwise Operators - bearly used (not common)
1 = 00000001
2 = 00000010
R = 00000011 ==> 3
*/
console.log(1 | 2); // Bitwise OR -- R = 00000011 - 3
console.log(1 & 2); // Bitwise AND -- R = 00000000 - 0

// Example: Read, Write, Execute
// 00000100 - Ready Only permission - as W & E is 0
// 00000110 - Read and Write permission - E is 0
// 00000111 - Read, Write, Execute permission

const readPersmission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission =0;
myPermission = myPermission | readPersmission | writePermission;

let message = (myPermission & readPersmission) ? 'yes' : 'no';
console.log(myPermission);
console.log(message);

// Operators Precedence
let sum = 2 + 3 * 4;
console.log(sum);

// Exercise - Swapping Variables
let rd = 'red';
let bl = 'blue';

let store = rd;
rd = bl;
bl = store;

console.log(rd);
console.log(bl);