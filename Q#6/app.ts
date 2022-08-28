var input : string | null  =prompt("Enter Year")
var year : number = Number(input)
if (year%4==0)
{
    console.log("The year is leap")
}
else
{
    console.log("The year is not leap")
}