//some vars set to false so conditional statements work properly
var timerRunning = false;
var count;
var counter = false;
var breakCounter = false;

//session timer
function timerInterval() {
  count = count - 1;
  if (timerRunning) {
    if (count <= 0) {
      clearInterval(counter);	  
	  counter = false;
      count = getLength("break") * 60;
      document.getElementById("timer").innerHTML = secondsToHMS(count);
      breakCounter = setInterval(breakInterval, 1000);
      var beep = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/240258/endbeeps.wav");
      beep.play();
      document.getElementById("status").innerHTML = "Break in progress";
      return;
    }
  }
  document.getElementById("timer").innerHTML = secondsToHMS(count);
}

//break timer
function breakInterval() {
  count = count - 1;
  if (timerRunning) {
    if (count <= 0) {
      clearInterval(breakCounter);
      breakCounter = false;
      count = getLength("session") * 60;
      document.getElementById("timer").innerHTML = secondsToHMS(count);
      timerRunning = true;
      document.getElementById("status").innerHTML = "Session in progress";
      counter = setInterval(timerInterval, 1000);
      return;
    }
  }
  document.getElementById("timer").innerHTML = secondsToHMS(count);
}

//event listeners for buttons
document.getElementById("addminute").addEventListener('click', function() {
  if (!timerRunning && !breakCounter) {
    var toSeconds = getLength("session") * 60;
    document.getElementById("timer").innerHTML = secondsToHMS(toSeconds);
  }
});

document.getElementById("subtractminute").addEventListener('click', function() {
  if (!timerRunning && !breakCounter) {
    var toSeconds = getLength("session") * 60;
    document.getElementById("timer").innerHTML = secondsToHMS(toSeconds);
  }
});

document.getElementById("addbrk").addEventListener('click', function() {
  if (!timerRunning && !counter && breakCounter) {
    var toSeconds = getLength("break") * 60;
    document.getElementById("timer").innerHTML = secondsToHMS(toSeconds);
  }
});

document.getElementById("subbrk").addEventListener('click', function() {
  if (!timerRunning && !counter && breakCounter) {
    var toSeconds = getLength("break") * 60;
    document.getElementById("timer").innerHTML = secondsToHMS(toSeconds);
  }
});

document.getElementById("reset").addEventListener('click', function() {
  if (!timerRunning) {
    var toSeconds = getLength("session") * 60;
    document.getElementById("timer").innerHTML = secondsToHMS(toSeconds);
    document.getElementById("status").innerHTML = "Click timer to start/pause/adjust";
    counter = false;
    breakCounter = false;
  }
});

document.getElementById("timer").addEventListener('click', function() {
  if (!timerRunning && breakCounter) {
    //resume break
    timerRunning = true;
    count = secondsRemaining();
    breakCounter = setInterval(breakInterval, 1000);
    document.getElementById("status").innerHTML = "Break in progress";
  } else if (!timerRunning && !counter && !breakCounter || !timerRunning && counter) {
    //start or resume timer    
    timerRunning = true;
    count = secondsRemaining();
    counter = setInterval(timerInterval, 1000);
    document.getElementById("status").innerHTML = "Session in progress";
  } else {
    //pause timer
    timerRunning = false;
    count = secondsRemaining();
    document.getElementById("timer").innerHTML = getLength("timer");
    clearInterval(counter);
    clearInterval(breakCounter);
    document.getElementById("status").innerHTML = "Paused";
  }
});

//get time length of #timer, #break or #session
function getLength(ID) {
  return document.getElementById(ID).innerHTML;
}

//prevent user setting break time to less than one minute
//function kept separate from event listeners
function changeBrkLength(input) {
  if (eval(getLength("break") + input) > 0 && !timerRunning) {
    document.getElementById("break").innerHTML = eval(getLength("break") + input);
  }
}

//prevent user setting session time to less than one minute
//function kept separate from event listeners
function changeSesLength(input) {
  if (eval(getLength("session") + input) > 0 && !timerRunning) {
    document.getElementById("session").innerHTML = eval(getLength("session") + input);
  }
}

//convert #timer to seconds
function secondsRemaining() {
  var time = getLength("timer").split(":");
  return time[0] * 3600 + time[1] * 60 + time[2] * 1;
}

//convert seconds to hh:mm:ss format
function secondsToHMS(seconds) {
  var d = new Date(1970,0,1);
  d.setSeconds(seconds);
  return d.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}