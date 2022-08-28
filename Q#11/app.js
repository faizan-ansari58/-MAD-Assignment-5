var input = prompt("Enter week(1 to 7)");
var week = Number(input);
if (week == 1) {
    console.log("The day is Monday");
}
else if (week == 2) {
    console.log("The day is Tuesday");
}
else if (week == 3) {
    console.log("The day is Wednesday");
}
else if (week == 4) {
    console.log("The day is Thursday");
}
else if (week == 5) {
    console.log("The day is Friday");
}
else if (week == 6) {
    console.log("The day is Saturday");
}
else if (week == 7) {
    console.log("The day is Sunday");
}
else {
    console.log("Invalid number, please enter number between 1 - 7");
}
