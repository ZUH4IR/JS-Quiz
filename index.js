//let testQuestion = document.getElementById("test-question")

// allQuestions = {
//         'What is Canada\'s national animal?' : ['Beaver', 'Duck', 'Horse', 0],
                
//         'What is converted into alcohol during brewing?' : ['Grain', 'Sugar' , 'Water', 1],

// }



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

let choices = allQuestions[0].[choiceA, choiceB, choiceC]



function checkAnswer() {
    if input = a {
        console.log("Correct")   
    } else {
        console.log("Incorrect")
    }
}