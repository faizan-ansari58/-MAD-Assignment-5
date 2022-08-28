var input1 = prompt("Enter first angle ");
var input2 = prompt("Enter first angle ");
var input3 = prompt("Enter first angle ");
var angle1 = Number(input1);
var angle2 = Number(input2);
var angle3 = Number(input3);
var sum = angle1 + angle2 + angle3;
console.log("Sum of all  angles is ", sum);
if (sum == 180) {
    console.log("This is valid triangle");
}
else {
    console.log("This is invalid triangle");
}
