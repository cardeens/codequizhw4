console.log("test")

var score = 0;
var questionsCompleted = 0
var timeRemaining = 60




document.readyState

const questions = [
    {
        title: "What language do you use to control the style of applications?",
        choices: ["CSS", "JavaScript", "jQuery", "React"],
        correctChoice: "CSS"
    },
    {
        title: "Which device is made by Microsoft",
        choices: ["PS4", "Android", "Surface", "Mac"],
        correctChoice: "Surface"
    },
]


const questionTitle = document.querySelector(".questionTitle")
const questionList = document.querySelector(".questionList")
const option1 = document.getElementById('o1');
const option2 = document.getElementById('o2');
const option3 = document.getElementById('o3');
const option4 = document.getElementById('o4');
const answer1 = document.getElementById('a1')
const answer2 = document.getElementById('a2')
const answer3 = document.getElementById('a3')
const answer4 = document.getElementById('a4')
const timer = document.querySelector("#timeLeft")



function startTimer() {
     const timerInterval = setInterval(function () {

        timeRemaining--;

        timer.textContent = timeRemaining + " seconds"
        console.log(timeRemaining)
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            (timer).css("background-color", "red")
            renderFinalPage();
        }
    }, 1000);
}

$(".start").click(
    questionOne)


function questionOne() {
    $(".startBlock").hide()
    $(".questionBlock").removeClass("hide")
    startTimer

    questionTitle.append(questions[0].title)
    $("#o1").append(questions[0].choices[0])
    $("#o2").append(questions[0].choices[1])
    $("#o3").append(questions[0].choices[2])
    $("#o4").append(questions[0].choices[3])

    answer1.addEventListener("click", winner)
    answer2.addEventListener("click", loser)
    answer3.addEventListener("click", loser)
    answer4.addEventListener("click", loser)
    
    
}

function winner() {
    $(".questionBlock").hide()
    $(".winnerBlock").removeClass("hide")

}

function loser() {
    $(".questionBlock").hide()
    $(".loserBlock").removeClass("hide")

}