var input : string | null =prompt("Enter Your salary ")
var salary : number = Number(input)
var totalSalary;
var HRA : number;
var DA : number;
if(salary <= 10000)
{
    HRA=salary*(20/100)
    DA=salary*(80/100)
    totalSalary=salary+HRA+DA;
    console.log("Salary is ", totalSalary)

}
else if(salary <= 20000 && salary>10000)
{
    HRA=salary*(25/100);
    DA=salary*(90/100);
    totalSalary=salary+HRA+DA;
    console.log("Salary is ", totalSalary)
}
else if(salary > 20000)
{
    HRA=salary*(30/100);
    DA=salary*(95/100);
    totalSalary=salary+HRA+DA;
    console.log("Salary is ", totalSalary)
}
else
{
    console.log("Not recognized")
}
