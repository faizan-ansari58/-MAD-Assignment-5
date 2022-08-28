var input = prompt("Enter the number");
var num = Number(input);
console.log("Number ", num);
if (num == 0) {
    console.log("Number is Zero");
}
else if (num > 0) {
    console.log("Number is positive");
}
else if (num < 0) {
    console.log("Number is Negative");
}
else {
    console.log("Number is not recognized");
}
