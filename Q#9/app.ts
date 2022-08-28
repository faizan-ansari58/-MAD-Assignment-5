var input: any =prompt("Input any value" )
if(input>="a" && input <="z" || input>="A" && input <="Z")
{
    console.log("The input value is alphabet")
}
else if(input >= -9999999999 && input<=+9999999999)
{
    console.log("The input value is Number")
}
else
{
    console.log("The input value is special character")
}
