var input:string | null =prompt("Enter Any Character");

var char : string =String(input)

if( char >="a" && char <= "z" || char >="A" && char <= "Z")
{
    console.log("Input character is Alphabet")
}

else 
{
    console.log("Input character is not alphabet")
}