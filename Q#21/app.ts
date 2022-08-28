var input : string | null = prompt("Enter units consumed ")
var unit : number= Number(input);
console.log("Units Consumed " , unit)
var unitPrice;
var surcharge;
var total;
if( unit <= 50)
{
    unitPrice=unit*0.50;
    console.log("Units Price " , unitPrice)
}
else if(unit >= 150)
{
    unitPrice=25+ (unit-50)*0.75
    console.log("Units Price " , unitPrice)
}
else if(unit >= 250)
{
    unitPrice= 100 + (unit-150)*1.20
    console.log("Units Price " , unitPrice)
}
else if(unit > 250)
{
    unitPrice= 220+ (unit-250)*1.50
    console.log("Units Price " , unitPrice)
}
surcharge=unitPrice*(20/100)
total=unitPrice+surcharge
console.log("Total Bill is ",total)
