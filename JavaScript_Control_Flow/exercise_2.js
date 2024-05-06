/*
[Exercise 2]
Write a function that looks at a Landscape and returns a true or false
*/

console.log(isLandscape(800, 600));

function isLandscape(width, height) {
    return (width > height);
}