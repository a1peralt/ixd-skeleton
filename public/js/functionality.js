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

  //Toggle hamburger
  $("#hamWords").hide();
    $("#cross").hide();
    $(".panel").hide();
    $(".planted").hide();
    $("#inactivator").hide();

  $("#hamburger").click(function() {
          
    $("#hamWords").toggle("slow");
    $("#hamburger").hide();
    $("#cross").show();
    $(".panel").toggle("slow");
    $("#inactivator").toggle('slow');
  });

  $("#cross").click(function(){
    $("#hamWords").toggle("slow");
    $("#cross").hide();
    $("#hamburger").show();
    $(".panel").toggle("slow");
    $("#inactivator").toggle('slow');
  })

  $(".Home").click(function() {
    $("#hamWords").toggle("slow");
    $("#cross").hide();
    $("#hamburger").show();
    $(".panel").toggle("slow");
    $("#inactivator").hide();
  })

    //Inactivator
  $('#inactivator').click(function() {
    $("#hamWords").toggle("slow");
    $("#cross").hide();
    $("#hamburger").show();
    $(".panel").toggle("slow");
    $("#inactivator").toggle('slow');
  });


  //User input screen
  /*
  $("#userInputScreen").hide();
  $("#hourglass-btn").click(function() {
          $("#userInputScreen").toggle("medium");
          $("#userInputScreen").show();
          $('#userInput').focus();
        });*/

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
  				$('#min-indicator').text('5min');
  			}
  			if(mins < 500 && mins > 480){
  				userTime = 5*60;
  				$('#min-indicator').text('10min');
  			}
  			if(mins < 480 && mins > 460){
  				userTime = 10*60;
  				$('#min-indicator').text('15min');
  			}
  			if(mins < 460 && mins > 440){
  				userTime = 20*60;
  				$('#min-indicator').text('20min');
  			}
  			if(mins < 440 && mins > 420){
  				userTime = 25*60;
  				$('#min-indicator').text('25min');
  			}
  			if(mins < 420 && mins > 400){
  				userTime = 30*60;
  				$('#min-indicator').text('30min');
  			}
  			if(mins < 400 && mins > 380){
  				userTime = 35*60;
  				$('#min-indicator').text('35min');
  			}
  			if(mins < 380 && mins > 360){
  				userTime = 40*60;
  				$('#min-indicator').text('40min');
  			}
  			if(mins < 360 && mins > 340){
  				userTime = 45*60;
  				$('#min-indicator').text('45min');
  			}
  			if(mins < 340 && mins > 320){
  				userTime = 50*60;
  				$('#min-indicator').text('50min');
  			}
        if(mins < 320 && mins > 300){
          userTime = 55*60;
          $('#min-indicator').text('55min');
        }
        if(mins < 300 && mins > 280){
          userTime = 60*60;
          $('#min-indicator').text('60min');
        }
        /////////// Half way ////////////////
        if(mins < 280 && mins > 260){
          userTime = 65*60;
          $('#min-indicator').text('65min');
        }
        if(mins < 260 && mins > 240){
          userTime = 70*60;
          $('#min-indicator').text('70min');
        }
        if(mins < 240 && mins > 220){
          userTime = 75*60;
          $('#min-indicator').text('75min');
        }
        if(mins < 220 && mins > 200){
          userTime = 80*60;
          $('#min-indicator').text('80min');
        }
        if(mins < 200 && mins > 180){
          userTime = 85*60;
          $('#min-indicator').text('85min');
        }
        if(mins < 180 && mins > 160){
          userTime = 90*60;
          $('#min-indicator').text('90min');
        }
        if(mins < 160 && mins > 140){
          userTime = 95*60;
          $('#min-indicator').text('95min');
        }
        if(mins < 140 && mins > 120){
          userTime = 100*60;
          $('#min-indicator').text('100min');
        }
        if(mins < 120 && mins > 100){
          userTime = 105*60;
          $('#min-indicator').text('105min');
        }
        if(mins < 100 && mins > 80){
          userTime = 110*60;
          $('#min-indicator').text('110min');
        }
        if(mins < 80 && mins > 60){
          userTime = 115*60;
          $('#min-indicator').text('115min');
        }
        if(mins < 60){
          userTime = 120*60;
          $('#min-indicator').text('120min');
        }

  		});

  	});

  	//Hide minute indicator
  	$('#timer-btn').mouseup(function(e){
  		$('#min-indicator').css('visibility', 'hidden');
      $('#nurture-btn').addClass("button-glow");
  	});


  	//Default Timer Setting (No time set by user)
	   $('#nurture-btn').click( function(e){

      $('#nurture-btn').removeClass("button-glow");

		//Start timer
		if(timerOn == false){

      //Update text
      $('#banner').css('fontSize','60px');
			
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
			//show the planted plant image
			$('.planted').show();
			//hide the hand plant
			$('.hands-img').hide();

			timerOn = true;
		}

    //Stop Timer
		else{
      //Confirmation screen

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
        //Get correct time
        diff = duration - (((Date.now() - start) / 1000) | 0);

        //Parse Ints
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.html(minutes + ":" + seconds + "\n remaining"); 

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

    //Start timer immediately
    timer();
    time = setInterval(timer, 1000);
}

function manualUserInput(){
  var str = document.getElementById("userInput").value;

  //Check if input is numerical value
  if( Number.isInteger(parseInt(str) ) ){
    userTime = str * 60;

    $("#userInputScreen").toggle("medium");
    $('#hourglass-btn').removeClass("hourglass-glow");
    $('#nurture-btn').addClass("button-glow");

  }
  //If not numerical value, notify user
  else{
    $('userInput').css('border', '1px solid red');
  }
}

function cancelUI(){
  $("#userInputScreen").toggle("medium");
}