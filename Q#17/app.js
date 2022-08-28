var input1 = prompt("Enter cooficient of x^2 ");
var input2 = prompt("Enter cooficient of x ");
var input3 = prompt("Enter constant ");
var a = Number(input1);
var b = Number(input2);
var c = Number(input3);
var root1;
var root2;
console.log("Cooficient of x^2 is ", a);
console.log("Cooficient of x is ", b);
console.log("Constant is ", c);
var disc = (b * b) - (4 * (a * c));
if (disc > 0) {
    root1 = (-b + Math.sqrt(disc)) / (2 * a);
    root2 = (-b - Math.sqrt(disc)) / (2 * a);
    console.log("The roots of quadratic equation are ".concat(root1, " and ").concat(root2));
}
else if (disc == 0) {
    root1 = -b / (2 * a);
    root2 = -b / (2 * a);
    console.log("The roots of quadratic equation are ".concat(root1, " and ").concat(root2));
}
else if (disc < 0) {
    root1 = -b / (2 * a) + Math.sqrt(disc);
    root1 = -b / (2 * a) - Math.sqrt(disc);
}
else {
    console.log("Values are not recognized");
}
