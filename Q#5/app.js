var input = prompt("Enter the Number");
var num = Number(input);
if (num % 2 == 0) {
    console.log("Number is Even");
}
else if (num % 2 !== 0) {
    console.log("Number is odd");
}
else {
    console.log("Number is not recognized");
}
