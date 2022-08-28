var input : string | null = prompt("Enter Amount ")
var amount : number = Number (input)
var fiveThousand : number =0;
var oneThousand : number=0;
var fivehundred : number =0;
var onehundred : number=0;
var fifty : number=0;
var twenty : number=0;
var ten : number=0;
var fiveCoin : number=0;
var oneCoin :number=0;
console.log("Amount",amount)
//fiveThousand Notes
for(var i=0 ; i<=100 ; i++)
{
    if(amount >=5000)
    {
        fiveThousand++;
        amount=amount-5000;
    }
}
console.log("Five thousand notes",fiveThousand)
console.log("Remaining amount",amount)
//One Thousand Notes
if(amount<5000)
{
for(var i=0 ; i<=100 ; i++)
{
    if(amount >=1000 && amount <5000)
    {
        oneThousand++;
        amount=amount-1000;
    }
}
console.log("One thousand notes",oneThousand)
console.log("Remaining amount",amount)
}
//five hundred notes
if(amount<1000)
{
for(var i=0 ; i<=100 ; i++)
{
    if(amount >=500 && amount <1000)
    {
        fivehundred++;
        amount=amount-500;
    }
}
console.log("Five Hundred notes",fivehundred)
console.log("Remaining amount",amount)
}
//one hundred notes
if(amount < 500)
{
for(var i=0 ; i<=100 ; i++)
{
    if(amount >=100 && amount <500)
    {
        onehundred++;
        amount=amount-100;
    }
}
console.log("one Hundred notes",onehundred)
console.log("Remaining amount",amount)
}
//fifty rupee notes
if(amount < 100)
{
for(var i=0 ; i<=100 ; i++)
{
    if(amount >=50 && amount <100)
    {
        fifty++;
        amount=amount-50;
    }
}
console.log("Fift Rupee notes",fifty)
console.log("Remaining amount",amount)
}
//ten rupee notes
if(amount < 50)
{
for(var i=0 ; i<=100 ; i++)
{
    if(amount >=10 && amount < 50)
    {
        ten++;
        amount=amount-10;
    }
}
console.log("Ten Rupee notes",ten)
console.log("Remaining amount",amount)
}
//five rupee coins
if(amount<10)
{
for(var i=0 ; i<=100 ; i++)
{
    if(amount >=5 && amount <10)
    {
        fiveCoin++;
        amount=amount-5;
    }
}
console.log("Five rupee coin",fiveCoin)
console.log("Remaining amount",amount)
}
//1 rupee coin
if(amount<5)
{
for(var i=0 ; i<=100 ; i++)
{
    if(amount >=1 && amount <5)
    {
        oneCoin++;
        amount=amount-1;
    }
}
console.log("One Rupee coin ",oneCoin)
console.log("Remaining amount",amount)
}