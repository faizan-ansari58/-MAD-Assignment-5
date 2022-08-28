var num1: string | null= prompt("Enter First Number");
var num2: string | null = prompt("Enter Second Number");
var num3: string | null = prompt("Enter third Number");
var num_1 : number = Number(num1)
var num_2 : number = Number(num2)
var num_3 : number = Number(num3)
console.log("number 1", num_1);
console.log("number 2", num_2);
console.log("number 3", num_3);
parseInt("num_1");
if (num_1 > num_2 || num_1 > num_3) {
    console.log("Number 1 is Greater");
}
else if (num_2 > num_1 || num_2 > num_3) {
    console.log("Number 2 is Greater");
}
else if(num_3 > num_1 || num_3 > num_2)
{
    console.log("Number 3 is Greater");
}
else 
{
    console.log("All are equal");
}