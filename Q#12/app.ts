var input : string | null =prompt("Enter month number (1-12)")
var month : number =Number (input)
if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
{
console.log("There are 31 days in this month")
}
else if( month == 4 || month == 6 || month == 9 || month == 11)
{
console.log("There are 30 days in this month")
}
else if( month == 2)
{
console.log("There are 28 or 29 days in this month")
}
else
{
    console.log("Enter valid month number")
}

