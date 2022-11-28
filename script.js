let allQuestions = [
    {
        question : "What is 6 x 6?",
        A : "36",
        B : "54",
        C : "96",
        correct : "A"
    },{
        question : "What is 8 x 8?",
        A : "68",
        B : "64",
        C : "96",
        correct : "B"
    },{
        question : "What is 12 x 12?",
        A : "84",
        B : "121",
        C : "144",
        correct : "C"
    }
];

let currQues = 0
let textEl = document.getElementById("status-text")
let nextQuesBtn = document.querySelector('#next-ques')
let ans = allQuestions[currQues].correct
let choiceDisable = false
let buttons = document.getElementsByClassName("choice");

function initialize(){ // Set Values to Question, Answer Choices, Enable Buttons
    ans = allQuestions[currQues].correct
    document.getElementById("q").innerHTML = allQuestions[currQues].question
    document.getElementById("A-btn").textContent = allQuestions[currQues].A
    document.getElementById("B-btn").textContent = allQuestions[currQues].B
    document.getElementById("C-btn").textContent = allQuestions[currQues].C
    document.getElementById("current-question").innerHTML = `Current Question: ${currQues+1}/${allQuestions.length}`
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled=false;
    }
}

initialize() // Question 1

function displayEnd(){ // Reveal Next Button and Status Function, Disable Buttons
    nextQuesBtn.style.display = "inline";
    textEl.style.display = "block"
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled=true;
    }
}

function hideEnd(){  // Hide Next Button and Status Function
    nextQuesBtn.style.display = "none";
    textEl.style.display = "none"
}

function checkAnswer(x){ // Check Answer Function
    if (x == ans){
        textEl.innerHTML = "Correct"
        textEl.className = "correct"
    } else {
        textEl.innerHTML = "Incorrect"
        textEl.className = "incorrect"
    }
    displayEnd()
}

nextQuesBtn.addEventListener("click", () => { // Next Question Button
    hideEnd()
    if(currQues >= allQuestions.length - 1) {
        currQues = 0
        q = allQuestions[currQues].question
    } else {
        currQues ++
    }
    initialize()
})

document.querySelector('#reset-quiz').addEventListener("click", () => { // Reset Question Button
    currQues = 0
    initialize()
})