const sides = document.querySelectorAll(".side-input");

const btn = document.querySelector("#hypotenuse-btn");

const out = document.querySelector("#output");


function formulate(a, b) {
    return Math.sqrt((a*a)+(b*b))
}

function calculateHypotenuse() {
    if(sides[0].value&&sides[1].value)
    {
        const final = formulate(Number(sides[0].value), Number(sides[1].value))
        out.innerHTML = "The hypotenuse is " + final;
    }
    else
    {
        out.innerHTML = "Invalid inputs, please provide valid inputs";   
    }
    
}

btn.addEventListener("click", calculateHypotenuse)

