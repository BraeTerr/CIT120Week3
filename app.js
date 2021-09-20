var ele=document.body.querySelector(".box")

var qOne=(prompt("Enter first number"))

var Operator=(prompt("enter operator"))

var qTwo=(prompt("enter second number"))

var x=(Number(qOne))

var y=(Number(qTwo))
//annoyingly, the formatting for x and y is the first solution I found that fixed the addition operation issue I was having
var add=x+y

if(isNaN(qOne)){
       ele.innerHTML="No number input. Refresh promptly";
    }else if (isNaN(qTwo)){
        ele.innerHTML=("1 of 2 numeric inputs received. Refresh");
        //Both return NaN as printed statement, used to give intended responses to NaN being true, but at least works somewhat
    } else var negate = (qOne - qTwo); var mult = (qOne * qTwo); var divide = (qOne / qTwo);
//The code below works as intended, with the add variable applying the necessary fix to the first Operator conditional
if(Operator==="+"){
    ele.innerHTML=add;
}else if (Operator === "-") {
    ele.innerHTML=negate;
} else if (Operator === "*") {
    ele.innerHTML=mult;
} else if (Operator === "/") {
    ele.innerHTML=divide;
}else ele.innerHTML="Invalid Operator, please refresh to continue"
