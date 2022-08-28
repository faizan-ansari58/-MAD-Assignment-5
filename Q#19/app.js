var input1 = prompt("Enter Physics Marks ");
var input2 = prompt("Enter Chemistry Marks ");
var input3 = prompt("Enter Biology Marks ");
var input4 = prompt("Enter Mathematics Marks ");
var input5 = prompt("Enter Computer Marks ");
var phy = Number(input1);
var che = Number(input2);
var bio = Number(input3);
var math = Number(input4);
var comp = Number(input5);
var total = (phy + che + bio + math + comp);
console.log("Total Marks ", total);
var totalPerc = (total * 100) / 500;
console.log("Total Percentage ", totalPerc);
if (totalPerc >= 90) {
    console.log("Grade is A");
}
else if (totalPerc >= 80 && totalPerc < 90) {
    console.log("Grade is B");
}
else if (totalPerc >= 70 && totalPerc < 80) {
    console.log("Grade is C");
}
else if (totalPerc >= 60 && totalPerc < 70) {
    console.log("Grade is D");
}
else if (totalPerc >= 40 && totalPerc < 60) {
    console.log("Grade is E");
}
else if (totalPerc < 40) {
    console.log("Grade is F");
}
