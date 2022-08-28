var input1 : string | null =prompt("Enter investment ")
var input2 : string | null =prompt("Enter Earned Amount ")
var invest : number =Number (input1)
var earn : number =Number (input2)
if(earn > invest)
{
    console.log("Profit") 
    console.log("Profit Amount",earn - invest) 
}
else if(invest > earn)
{
    console.log("loss")  
    console.log("Loss Amount", invest - earn)  
}
else
{
    console.log("No Profit or Loss")   
}