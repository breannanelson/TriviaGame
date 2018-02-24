
var trivia = [
    {
        question: "What was the name of Sheldon’s favorite cat?",
        answers: ["Zazzles", "Marie Curie", "Oppenheimer", "Einstein"]
    },
    {
        question: "Who has Nebraskan man hands?",
        answers: ["Penny", "Amy", "Leonard", "Sheldon"]
    },
    {
        question: "What is Raj’s favorite drink?",
        answers: ["Grasshopper", "Margarita", "Lemon Drop", "Sex on the Beach"]
    },
    {
        question: "Who does Wolowitz meet on Thanksgiving volunteering at the soup kitchen?",
        answers: ["Elon Musk", "John Glen", "Adam West", "Bill Gates"]
    },    
    {
        question: "What is Raj’s occupation?",
        answers: ["Astrophysicist", "Geologist", "Engineer", "Archeologist"]
    },    
    {
        question: "What is NOT a job Wolowitz has had?",
        answers: ["Bartender", "Magician", "Engineer", "Astronaut"]
    },    
    {
        question: "Who does Sheldon go to a sauna with?",
        answers: ["James Earl Jones", "Stephen Hawking", "Bills Gates", "Amy Farrah Fowler"]
    },    
    {
        question: "What does Leonard bring Sheldon back from his sea research expedition?",
        answers: ["A sailor cap", "A snow flake", "A compass", "A tee-shirt"]
    },    
    {
        question: "Who has a brother who has done time in Prison?",
        answers: ["Penny", "Bernadette", "Leonard", "Sheldon"]
    },    
    {
        question: "Who has a twin sister?",
        answers: ["Sheldon", "Amy", "Bernadette", "Leonard"]
    },    
    {
        question: "What sport does Sheldon not play but is an expert in?",
        answers: ["Football", "Basketball", "Hockey", "Baseball"]
    },    
    {
        question: "Penny finds a job at last and has her big acting break in a commercial for what product?",
        answers: ["Hemorrhoid cream", "Toothpaste", "Dandruff shampoo", "Ladies razors"]
    },    
    {
        question: "What is the name of Sheldon’s podcast?",
        answers: ["Fun of Flags", "Truth about Trains", "Fun with Physics", "Wonders of Weaving"]
    },    
    {
        question: "What did Sheldon almost win a Nobel Prize in?",
        answers: ["Chemistry", "Physics", "Mathematics", "Music"]
    },    
    {
        question: "Who was Penny’s first husband?",
        answers: ["Zack", "Leonard", "Kurt", "Stewart"]
    },    
    {
        question: "Which Disney princess did Bernadette dress up as?",
        answers: ["Cinderella", "Sleeping Beauty", "Snow White", "Belle"]
    },    
    {
        question: "What sport did Barry Kripke teach the boys?",
        answers: ["Fencing", "Basketball", "Wrestling", "Swimming"]
    },    
    {
        question: "What state does Sheldon’s mother live in?",
        answers: ["Texas", "New Jersey", "Kentucky", "Nebraska"]
    }
];

var selectionMade = false;
var totalQCount = 0;
var correctAnsCount = 0;
var wrongAnsCount = 0;
var timeOutCount = 0;


// Creates new audio element and adds the song as an attribute
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "./assets/audio/bbt-audio.mp3");
// Plays default music when page is loaded
audioElement.play();

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

    $("#question").append("<p class='quest'>" + trivia[i].question + "</p><br>");

    var index = randomIndexGen()
    var num = 1;

    for (var j = 0; j < 4; j++) {
        if (trivia[i].answers[index[j]] === trivia[i].answers[0]) {
            $("#answer").append("<button class='btn btn-secondary btn-lg btn-outline-danger btn-lg btnPadding' id='correctAns'>" + trivia[i].answers[index[j]] + "</button>");
        }
        else {
            $("#answer").append("<button class='btn btn-secondary btn-lg btn-outline-danger btn-lg btnPadding' id='wrongAns" + num + "'>" + trivia[i].answers[index[j]] + "</button>");
            num++;
        }
    }
    i++;
}

function timer() {
    var count = 15;
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

function secondsLeft(val) {
    $("#timer").html("<h2 class='time'>00:" + val + "<h2>")

}

function timeUp() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer").html("<p class='feedback'>Time is up! The correct answer is " + trivia[totalQCount].answers[0]+ ".</p><br><img src='./assets/images/timeup-photo.gif' alt='correct gif'>");
    totalQCount++;
    setTimeout(function () {
        $("#answer").empty();
        if (totalQCount < trivia.length) {
            timer();
            questionSlideShow()
        }
        else {
            finalStats();
        }
    }, 5000);
    timeOutCount++;
}

function correctAnsFeedback() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer").html("<p class='feedback'>You are correct!</p><img src='./assets/images/correct-photo.gif' alt='correct gif'>")
    setTimeout(function () {
        $("#answer").empty();
        if (totalQCount < trivia.length) {
            timer();
            questionSlideShow();
        }
        else {
            finalStats();
        }
    }, 5000);
    correctAnsCount++;
}

function wrongAnsFeedback() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer").html("<p class='feedback'>You are incorrect! The correct answer is " + trivia[totalQCount].answers[0]+".</p><img src='./assets/images/wrong-photo.gif' alt='correct gif'>");
    setTimeout(function () {
        $("#answer").empty();
        if (totalQCount < trivia.length) {
            timer();
            questionSlideShow();
        }
        else {
            finalStats();
        }
    }, 5000);
    wrongAnsCount++;
}

function finalStats() {
    $("#timer").empty();
    $("#question").empty();
    $("#answer").html("<p class='feedback'>That's a wrap!<br>Number of correct answers: " + correctAnsCount + "<br>Number of incorrect answers: " + wrongAnsCount + "<br>Number of unanswered questions: " + timeOutCount + "</p><br>");
    $("#button").append("<button class='btn btn-secondary btn-lg btn-block btn-outline-danger btn-lg startButton' role='button'>Try Again</button>")
    $(".startButton").click(function () {
        $("#button").empty();
        $("#answer").empty();
        timer();
        questionSlideShow()
    })
    // Reset
    reset();
}

function reset() {
    totalQCount = 0;
    i = 0;
    correctAnsCount = 0;
    wrongAnsCount = 0;
    timeOutCount = 0;
}


// Start button

$(".startButton").click(function () {
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