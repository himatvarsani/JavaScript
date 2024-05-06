/*
[Exercise 1]
Write a function that takes two numbers and returns the maximum of the two
*/

let number = max(1, 3);
console.log(number);

function max(numb1, numb2) {
    // if (numb1 > numb2) return numb1
    // return numb2
    // Simplier than above
    return (numb1 > numb2) ? numb1 : numb2;
}
