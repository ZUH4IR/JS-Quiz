//let testQuestion = document.getElementById("test-question")

// allQuestions = {
//         'What is Canada\'s national animal?' : ['Beaver', 'Duck', 'Horse', 0],
                
//         'What is converted into alcohol during brewing?' : ['Grain', 'Sugar' , 'Water', 1],

// }

let questionEl = document.getElementById("q")
// let allChoices = document.getElementById("choices")
let textEl = document.getElementById("status-text")

var A = document.getElementById("A")
var B = document.getElementById("B")
var C = document.getElementById("C")

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

let q = allQuestions[0].question
let a = allQuestions[0].correct

// let choices = allQuestions[0].[choiceA, choiceB, choiceC]

// function checkAnswer() {
//     if input = a {
//         console.log("Correct")   
//     } else {
//         console.log("Incorrect")
//     }
// }

questionEl.innerHTML = allQuestions[0].question

A.innerHTML = allQuestions[0].choiceA
B.innerHTML = allQuestions[0].choiceB
C.innerHTML = allQuestions[0].choiceC

// textEl.textContent = "HELLO"

console.log(B.textContent)


function checkAnswer(x){
    if (x == a) {
        textEl.innerHTML = "Correct"
    } else
        textEl.innerHTML = "Incorrect"
        console.log(x)
}

// let R = 22

// function printB(x){
//     if ((x) = "22") {
//         console.log("yes")
//     }
// }

// printB(R)