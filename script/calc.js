let subtract = document.querySelector("#subtract");
let add = document.getElementById("add");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let output = document.querySelector("#output");

function subtraction(){
    let numOne = Number(document.querySelector("#numOne").value);
    let numTwo = Number(document.querySelector("#numTwo").value);
    output.innerText = numOne - numTwo;
}
function addition(){
    let numOne = Number(document.querySelector("#numOne").value);
    let numTwo = Number(document.querySelector("#numTwo").value);
    output.innerText = numOne + numTwo;
}
function multiplication(){
    let numOne = Number(document.querySelector("#numOne").value);
    let numTwo = Number(document.querySelector("#numTwo").value);
    output.innerText = numOne * numTwo;
}
function division() {
    let numOne = Number(document.querySelector("#numOne").value);
    let numTwo = Number(document.querySelector("#numTwo").value);
    output.innerText = numOne / numTwo;
}

subtract.onclick = subtraction;
add.onclick = addition;
multiply.onclick = multiplication;
divide.onclick = division;