var input1 : string | null =prompt("Enter Physics Marks ")
var input2 : string | null =prompt("Enter Chemistry Marks ")
var input3 : string | null =prompt("Enter Biology Marks ")
var input4 : string | null =prompt("Enter Mathematics Marks ")
var input5 : string | null =prompt("Enter Computer Marks ")
var phy : number =Number(input1);
var che : number =Number(input2);
var bio : number =Number(input3);
var math : number =Number(input4);
var comp : number =Number(input5);
var total = (phy + che + bio + math + comp);
console.log("Total Marks ", total )
var totalPerc :number  = (total*100)/500;
console.log("Total Percentage ", totalPerc )
if(totalPerc >= 90)
{
    console.log("Grade is A")
}
else if(totalPerc >=80 && totalPerc < 90)
{
    console.log("Grade is B")
}
else if(totalPerc >=70 && totalPerc < 80)
{
    console.log("Grade is C")
}
else if(totalPerc >=60 && totalPerc < 70)
{
    console.log("Grade is D")
}
else if(totalPerc >=40 && totalPerc < 60)
{
    console.log("Grade is E")
}
else if(totalPerc < 40)
{
    console.log("Grade is F")
}