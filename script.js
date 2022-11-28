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

function initialize(){ // Set Values to Question & Answer Choices
    ans = allQuestions[currQues].correct
    document.getElementById("q").innerHTML = allQuestions[currQues].question
    document.getElementById("A-btn").textContent = allQuestions[currQues].A
    document.getElementById("B-btn").textContent = allQuestions[currQues].B
    document.getElementById("C-btn").textContent = allQuestions[currQues].C
    document.getElementById("current-question").innerHTML = `Current Question: ${currQues+1}/${allQuestions.length}`
    // document.getElementsByClassName('choice').disabled = false
    document.getElementById("A-btn").disabled = false
    document.getElementById("B-btn").disabled = false
    document.getElementById("C-btn").disabled = false
}

initialize() // Question 1

function displayEnd(){ // Reveal Next Button and Status Function
    nextQuesBtn.style.display = "inline";
    textEl.style.display = "block"
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
    console.log(document.getElementsByClassName('choice')) // testing...
    // document.getElementsByClassName('choice').disabled = true // fix this
    document.getElementById("A-btn").disabled = true
    document.getElementById("B-btn").disabled = true
    document.getElementById("C-btn").disabled = true
}

nextQuesBtn.addEventListener("click", () => { // next question button
    hideEnd()
    if(currQues >= allQuestions.length - 1) {
        currQues = 0
        q = allQuestions[currQues].question
    } else {
        currQues ++
    }
    initialize()
})

document.querySelector('#reset-quiz').addEventListener("click", () => { // reset question button
    currQues = 0
    initialize()
})