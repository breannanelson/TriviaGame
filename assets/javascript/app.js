
var trivia = [
    {
        question: "What is your name?",
        answers: ["Bree", "Paul", "Daisy", "Aleks"]
    },
    {
        question: "What is your age?",
        answers: ["23", "21", "45", "12"]
    },
    {
        question: "Where do you live?",
        answers: ["Irvine", "Seattle", "Mission Viejo", "Tustin"]
    }
];

var selectionMade = false;
var totalQCount = 0;
// var audio = new Audio("LINK AN AUDIO FILE HERE");


function timer() {
    var count = 5;
    var sec = setInterval(function () {
        if (selectionMade) {
            clearTimeout(sec);
            selectionMade = false;
        }
        else if (count === 0) {
            clearTimeout(sec);
            timeUp();
        }
        else {
            if (count >= 10) {
                secondsLeft(count);
            }
            else {
                count = "0" + count;
                secondsLeft(count);
            }
        }
        count--;
    }, 1000)
}

function randomIndexGen() {
    var int1 = Math.floor(Math.random() * 4);
    var int2 = Math.floor(Math.random() * 4);
    while (int1 === int2) {
        var int2 = Math.floor(Math.random() * 4);
    }
    var int3 = Math.floor(Math.random() * 4);
    while (int3 === int2 || int1 === int3) {
        var int3 = Math.floor(Math.random() * 4);
    }
    var int4 = Math.floor(Math.random() * 4);
    while (int4 === int2 || int1 === int4 || int3 === int4) {
        var int4 = Math.floor(Math.random() * 4);
    }

    int = [int1, int2, int3, int4];

    return int;
}

var i = 0;
function questionSlideShow() {

    $("#question").append(trivia[i].question + "<br>");

    var index = randomIndexGen()
    var num = 1;

    for (var j = 0; j < 4; j++) {
        if (trivia[i].answers[index[j]] === trivia[i].answers[0]) {
            $("#answer").append("<button id='correctAns'>" + trivia[i].answers[index[j]] + "</button><br>");
        }
        else {
            $("#answer").append("<button id='wrongAns" + num + "'>" + trivia[i].answers[index[j]] + "</button><br>");
            num++;
        }
    }
    i++;
}

function reset() {
    // start over the game;
    // sets selection to false;
}

function finalStats() {
    // displays final stats
    // correctly answered
    // incorrectly answered
    // unanswered
}

// boolean selectMade = false;
// if region is selected set selectMade = true;

// if selection not made (selectMade = false), and time === 0, .empty() question and display congratualtions page
// if selection made is true check answer. if correct display correct! correctCount++
// if selection made is true check answer. if false display youre wrong! wrongCount++

function secondsLeft(val) {
    $("#timer").html("<h2>00:" + val + "<h2>")

}

function timeUp() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer").html("Time is up! The correct answer is " + trivia[totalQCount].answers[0]);
    totalQCount++;
    setTimeout(function() {
        $("#answer").empty();
        if (totalQCount < trivia.length) {
            timer();
            questionSlideShow()
        }
        else {
            finalStats();
        }
      }, 5000);
}

function correctAnsFeedback() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer").text("You are correct!")
    setTimeout(function() {
        $("#answer").empty();
        if (totalQCount < trivia.length) {
            timer();
            questionSlideShow();
        }
        else {
            finalStats();
        }
      }, 5000);
}

function wrongAnsFeedback() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer").html("You are incorrect! The correct answer is " + trivia[totalQCount].answers[0]);
    setTimeout(function() {
        $("#answer").empty();
        if (totalQCount < trivia.length) {
            timer();
            questionSlideShow();
        }
        else {
            finalStats();
        }
      }, 5000);
}

function finalStats() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer").html("That's a wrap!");
    $("#answer").append("<button class= 'startButton'>Try Again</button>")
    totalQCount = 0;
    i = 0;
}


// Start button

$("#button").html("<button class= 'startButton'>Start</button><br>");

$(document).on("click", ".startButton", function () {
    $("#button").empty();
    $("#answer").empty();
    timer();
    questionSlideShow()
})



$(document).on("click", "#correctAns", function () {
    correctAnsFeedback();
    totalQCount++;
    selectionMade = true;
})

$(document).on("click", "#wrongAns1", function () {
    wrongAnsFeedback();
    totalQCount++;
    selectionMade = true;
})

$(document).on("click", "#wrongAns2", function () {
    wrongAnsFeedback();
    totalQCount++;
    selectionMade = true;
})

$(document).on("click", "#wrongAns3", function () {
    wrongAnsFeedback();
    totalQCount++;
    selectionMade = true;
})