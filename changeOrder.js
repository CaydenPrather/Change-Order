// Countodwn function
function startCountdown(){
    // Defining variables for time and the interval
    var timeleft = 10;
    var countdownTimer = setInterval(function(){
    // If the time left is equal to zero, print what is in qutoations and clear the countdown timer interval
    if(timeleft == 0){
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Blastoff!";
    // otherwise if the time left is less than or equal to 5, print what is in quotations + timeleft value
    } else if( timeleft <= 5){
        document.getElementById("countdown").innerHTML = "Warning less than 1/2 way to launch, time left = " + timeleft;
    // if the above conditions are all false, print what is in quotations and timeleft value
    } else {
        document.getElementById("countdown").innerHTML = "Countdown to Launch: " + timeleft + " seconds remaining";
    }
    // Decrement the time left after each run
    timeleft -= 1;
    // setting time/speed of countdown
    }, 1000);
}
