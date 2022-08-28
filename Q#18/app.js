var input1 = prompt("Enter investment ");
var input2 = prompt("Enter Earned Amount ");
var invest = Number(input1);
var earn = Number(input2);
if (earn > invest) {
    console.log("Profit");
    console.log("Profit Amount", earn - invest);
}
else if (invest > earn) {
    console.log("loss");
    console.log("Loss Amount", invest - earn);
}
else {
    console.log("No Profit or Loss");
}
