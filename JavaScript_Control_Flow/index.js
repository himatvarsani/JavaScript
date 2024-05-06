// If...Else
/*
Hour
If hour is between 6am and 12pm: Good morning!
If it is between 12pm and 6pm: Good afternoon!
Otherwise: Good evening!
*/

let hour = 19;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening')
}

// Switch...case

//let role; -- this would output the default
let role = 'guest'; // Output: Guest User

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

// For -- Loops 
for (let i = 0; i < 5; i++) {
    console.log('Hello World');
}

// While
let i = 0;

while (i <=5) {
    console.log(i);
    i++;
}

// do-while
let x = 0;
do {
    console.log(x);
    x++;
} while (x <=5);

// for-in -- To iterate over the property of an object
const person = {
    name: 'Himat',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

// For..of -- Iterate over the elements or items in an Arrays
for (let color of colors)
    console.log(color);

//Break and Continue -- Applies to all loops
let a = 0;
while (a <= 10) {
    if ( a === 5) break;

    console.log(a);
    a++;
}

let b = 0
while (b <= 10) {
    if ( b % 2 === 0) {
        b++;
        continue;
    }

    console.log(b);
    b++;
}