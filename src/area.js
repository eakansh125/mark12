const base = document.querySelector("#base");

const height = document.querySelector("#height");

const btn = document.querySelector("#btn");

const output = document.querySelector("#output")

function calculateArea() {
    if(base.value && height.value)
    output.innerHTML = "The area of the triange is " + Number(base.value)*Number(height.value)/2  
    else
    output.innerHTML = "Invalid inputs, please provide valid inputs" 
}

btn.addEventListener("click", calculateArea)