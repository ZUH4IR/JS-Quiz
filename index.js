//let testQuestion = document.getElementById("test-question")
let questionEl = document.getElementById("q")
// let allChoices = document.getElementById("choices")
let textEl = document.getElementById("status-text")

var A = document.getElementById("A-btn")
var B = document.getElementById("B-btn")
var C = document.getElementById("C-btn")

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
        choiceB : "72",
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
// all [0] need to be changed into currentQues

let currQues = 0

let q = allQuestions[currQues].question
let ans = allQuestions[currQues].correct

questionEl.innerHTML = allQuestions[currQues].question

A.textContent = allQuestions[currQues].choiceA
B.textContent = allQuestions[currQues].choiceB
C.textContent = allQuestions[currQues].choiceC


// document.getElementById("next-ques").onclick = function nextQues(){
//     currQues ++
// }

// let nextQuesBtn = document.getElementById("next-ques")

let nextQuesBtn = document.querySelector('#next-ques')

document.getElementById("current-question").innerHTML = `Current Question: ${currQues}`

nextQuesBtn.addEventListener("click", () => {
    currQues ++
    let q = allQuestions[currQues].question
    let ans = allQuestions[currQues].correct

    questionEl.innerHTML = allQuestions[currQues].question

    A.textContent = allQuestions[currQues].choiceA
    B.textContent = allQuestions[currQues].choiceB
    C.textContent = allQuestions[currQues].choiceC
})

function checkAnswer(x){
    if (x == ans) {
        textEl.innerHTML = "Correct"
    } else
        textEl.innerHTML = "Incorrect"
}

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