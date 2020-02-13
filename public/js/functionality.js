'use strict';

//default time of 15 minutes
var defaultTime = 15 * 60;
var userTime;
var timerOn = false;
var time;
var mins;


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	//Console Check
	console.log("Functionality.js is connected!");

	//Draggable timer-btn
	$( function() {
    	$( "#timer-btn" ).draggable( {axis: 'y', containment: [0,40,0,505]});
  	});


	//Show minute indicator
  	$('#timer-btn').mousedown( function(e){
  		$('#min-indicator').css('visibility', 'visible');

  		//Get draggable location
  		$('#timer-btn').mousemove(function(e){
  			mins = parseInt( $('#timer-btn').css('top'), 10 );

  			//Console check
  			//console.log(mins);

  			if(mins > 500){
  				userTime = 1*60;
  				$('#min-indicator').text('1min');
  			}
  			if(mins < 500 && mins > 450){
  				userTime = 5*60;
  				$('#min-indicator').text('5min');
  			}
  			if(mins < 450 && mins > 400){
  				userTime = 10*60;
  				$('#min-indicator').text('10min');
  			}
  			if(mins < 400 && mins > 350){
  				userTime = 20*60;
  				$('#min-indicator').text('20min');
  			}
  			if(mins < 350 && mins > 300){
  				userTime = 30*60;
  				$('#min-indicator').text('30min');
  			}
  			if(mins < 300 && mins > 250){
  				userTime = 40*60;
  				$('#min-indicator').text('40min');
  			}
  			if(mins < 250 && mins > 200){
  				userTime = 50*60;
  				$('#min-indicator').text('50min');
  			}
  			if(mins < 200 && mins > 150){
  				userTime = 60*60;
  				$('#min-indicator').text('60min');
  			}
  			if(mins < 150 && mins > 100){
  				userTime = 80*60;
  				$('#min-indicator').text('80min');
  			}
  			if(mins < 100 && mins > 50){
  				userTime = 100*60;
  				$('#min-indicator').text('100min');
  			}
  			if(mins < 50){
  				userTime = 120*60;
  				$('#min-indicator').text('120min');
  			}

  		});

  	});

  	//Hide minute indicator
  	$('#timer-btn').mouseup(function(e){
  		$('#min-indicator').css('visibility', 'hidden');
  	});


  	//Default Timer Setting (No time set by user)
	   $('#nurture-btn').click( function(e){

		//Start timer
		if(timerOn == false){
			
			//Start timer with default time
			if(userTime == null){
				 startTimer(defaultTime, $('#banner'));

				//Console check
				console.log("Timer started with default time");
			}
			//Use the time set by user
			else{
				startTimer(userTime, $('#banner'));
				//Console check
				console.log("Timer started with user time");
			}

			//Change words on button
			$('#nurture-btn').html("Abandon <img src=\"https://github.com/a1peralt/ixd-skeleton/blob/master/resources/broken-heart-color.png?raw=true\" class=\"broken-heart\" />  ");

			timerOn = true;
		}

    //Stop Timer
		else{
			clearInterval(time);
			//Console check
			console.log("Timer ended");
			//Change words on button
			$('#nurture-btn').html("Nurture <img src=\"https://github.com/a1peralt/ixd-skeleton/blob/master/resources/heart-color.png?raw=true\" class=\"heart-img\" />");

			timerOn = false;
		}
	}

	);

}


/*Timer functionality*/


//Timer Function
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds + "\n remaining"); 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }

        //Timer End behavior
        if(minutes == 0 && seconds == 0){

          //Stop Timer
          clearInterval(time);

          //Set Banner Text
          $('#banner').html('Time is up!');

          //Reset Button functionality
          $('#nurture-btn').html("Nurture <img src=\"https://github.com/a1peralt/ixd-skeleton/blob/master/resources/heart-color.png?raw=true\" class=\"heart-img\" />");
          timerOn = false;
        }
    };

    // we don't want to wait a full second before the timer starts
    timer();
    time = setInterval(timer, 1000);
}

function manualUserInput(){
  var str = document.getElementById("userInput").value;
  userTime = str
  startTimer(userTime, $('#banner'));
  $("#userInputScreen").toggle("medium");
}