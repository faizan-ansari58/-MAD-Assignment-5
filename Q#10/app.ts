var input : string | null = prompt ("Enter Alphabet")
var char : string = String(input)
if(char >= "a" && char <= "z")
{
    console.log("The alphabet is in lower case")
}
else if(char >= "A" && char <= "Z")
{
    console.log("The alphabet is in Upper case")
}
else 
{
    console.log("The input Character is not alphabet")
}
