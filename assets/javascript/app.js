var userAnswered = 0;
var userCorrect = 0;
var userInCorrect = 0;

var beginTimer = 30;
var coutDown;



//question answers
var q1 = "";

var questionHead = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];



var startButton = $("#start-btn");



function startGame() {
    //hides the start button
    startButton.hide();

    $("form").show();

}

function startTimer() {
    clearInterval(coutDown);
    countDown = setInterval(decrement, 1000);

}

//decrement through start timer number
function decrement() {

    beginTimer--;

    $("#timer").html(
        "<h4>Count Down:</h4>"+
        "<h3>"+beginTimer+"</h3>");

    if (beginTimer === 0){
        $("form").hide();
        $("#timer").hide();
        $("#results").show();
        $("#results").html(
            "<h3> Correct Answers:  "+userCorrect+"</h3>"+
            "<h3> InCorrect Answers:   "+userInCorrect+"</h3>"
        )
        


    }

}


//logs the values for Question 1
function q1Function(inlineRadioOptions) {
    q1 = inlineRadioOptions;

    if ( q1 === "2012"){
        userCorrect++;
    }
    else{
        userInCorrect++;
    }
}

//logs the values for Question 2
function q2Function(inlineRadioOptions) {
    q2 = inlineRadioOptions;

    if ( q2 === "Lightning"){
        userCorrect++;
    }
    else{
        userInCorrect++;
    }
}

//logs the values for Question 3
function q3Function(inlineRadioOptions) {
    q3 = inlineRadioOptions;

    if ( q3 === "Iron Man"){
        userCorrect++;
    }
    else{
        userInCorrect++;
    }
}

//logs the values for Question 4
function q4Function(inlineRadioOptions) {
    q4 = inlineRadioOptions;

    if ( q4 === "Vibranium"){
        userCorrect++;
    }
    else{
        userInCorrect++;
    }
}

//logs the values for Question 5
function q5Function(inlineRadioOptions) {
    q5 = inlineRadioOptions;

    if ( q5 === "five"){
        userCorrect++;
    }
    else{
        userInCorrect++;
    }
}



///user clicks start
startButton.on("click", function () {

    startGame();

    startTimer();

    $("#timer").show();

});


//when page loads
$("form").hide();
$("#timer").hide();
$("#results").hide();
$("iframe").hide();