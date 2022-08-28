var input = prompt("Enter the number");
var num = Number(input);
if (num % 11 == 0 && num % 5 == 0) {
    console.log("Number is divisible by 5 and 11");
}
else if (num % 5 == 0) {
    console.log("Number is divisible by 5");
}
else if (num % 11 == 0) {
    console.log("Number is divisible by 11");
}
else {
    console.log("Number is not recognized");
}
