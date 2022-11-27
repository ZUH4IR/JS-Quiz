// JS

let allQuestions = [
    {
        question : "What is 6 x 6?",
        choiceA : "36",
        choiceB : "54",
        choiceC : "96",
        correct : "A"
    },{
        question : "What is 8 x 8?",
        choiceA : "68",
        choiceB : "64",
        choiceC : "96",
        correct : "B"
    },{
        question : "What is 12 x 12?",
        choiceA : "84",
        choiceB : "121",
        choiceC : "144",
        correct : "C"
    }
];

let questionEl = document.getElementById("q")
let textEl = document.getElementById("status-text")

var A = document.getElementById("A-btn")
var B = document.getElementById("B-btn")
var C = document.getElementById("C-btn")

let currQues = 0
let ans = allQuestions[currQues].correct
let nextQuesBtn = document.querySelector('#next-ques')

function initialize(){
    ans = allQuestions[currQues].correct
    questionEl.innerHTML = allQuestions[currQues].question
    A.textContent = allQuestions[currQues].choiceA
    B.textContent = allQuestions[currQues].choiceB
    C.textContent = allQuestions[currQues].choiceC
    document.getElementById("current-question").innerHTML = `Current Question: ${currQues+1}/${allQuestions.length}`
}

initialize()

function displayEnd(){
    nextQuesBtn.style.display = "inline";
    textEl.style.display = "block"
}

function hideEnd(){
    nextQuesBtn.style.display = "none";
    textEl.style.display = "none"
}

function checkAnswer(x){
    if (x == ans){
        textEl.innerHTML = "Correct"
        textEl.className = "correct"
    } else
        textEl.innerHTML = "Incorrect"
        textEl.className = "incorrect"
    displayEnd()
    console.log(document.getElementsByClassName('choice'))
    document.getElementsByClassName('choice').disabled = true
}

nextQuesBtn.addEventListener("click", () => {
    hideEnd()
    if(currQues >= allQuestions.length - 1) {
        currQues = 0
        q = allQuestions[currQues].question
    } else {
            currQues ++
        }
    initialize()
})

document.querySelector('#reset-quiz').addEventListener("click", () => {
    currQues = 0
    initialize()
})

// document.getElementById("next-ques").onclick = function nextQues(){
//     currQues ++
// }

// let nextQuesBtn = document.getElementById("next-ques")

// document.getElementById("current-question").textContent = currQues

// textEl.textContent = "HELLO"

// console.log(B) = <button id="B" onclick="checkAnswer('B')">54</button>

// let choices = allQuestions[0].[choiceA, choiceB, choiceC]

// function checkAnswer() {
//     if input = a {
//         console.log("Correct")   
//     } else {
//         console.log("Incorrect")
//     }
// }

// let R = 22

// function printB(x){
//     if ((x) = "22") {
//         console.log("yes")
//     }
// }

// printB(R)