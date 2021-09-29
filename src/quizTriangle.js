const quizForm = document.querySelector(".quiz-form")

const ansBtn = document.querySelector("#submit-ans-btn")

const output = document.querySelector("#output")

const answers = ["90", "right"]

function calculateScore() {

    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm)
    for(let value of formResults.values())  //formResults.entries() gives key-value pair/values gives just the value
    {
        if(value === answers[index])
        {
            score++;
        }
        index++;
    }

    output.innerHTML = "Score is: "+score;
}

ansBtn.addEventListener("click", calculateScore)