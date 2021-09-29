const inputs = document.querySelectorAll(".angle");

const istriangleBtn = document.querySelector("#is-triangle-btn");

const outputFld = document.querySelector("#output");

function calculateSumOfAngles(a, b, c) {
    return a+b+c;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180)
    outputFld.innerHTML = "Its a triangle"
    else
    outputFld.innerHTML = "Not a triangle"
}

istriangleBtn.addEventListener("click", isTriangle)