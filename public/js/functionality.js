//GLOBAL VARIABLES
var defaultTime = 15 * 60;
var userTime;
var timerOn = false;
var time;
var mins;
var text_time;

var toggleSpeed = 100;


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

  //Toggle hamburger
  $("#hamWords").hide();
  $("#cross").hide();
  $(".panel").hide();
  $(".planted").hide();
  $("#inactivator").hide();
  $(".addToGardenScreen").hide();
  $("#confirmation-screen").hide();

  $("#hamburger").click(function() {
          
    $("#hamWords").show(toggleSpeed);
    $("#hamburger").hide(toggleSpeed);
    $("#cross").show(toggleSpeed);
    $(".panel").toggle(toggleSpeed);
    $("#inactivator").show(1);
  });

  $("#cross").click(function(){
    $("#hamWords").toggle(toggleSpeed);
    $("#cross").hide(toggleSpeed);
    $("#hamburger").show(toggleSpeed);
    $(".panel").toggle(toggleSpeed);
    $("#inactivator").hide(1);
  })

  $(".Home").click(function() {
    $("#hamWords").toggle(toggleSpeed);
    $("#cross").hide(toggleSpeed);
    $("#hamburger").show(toggleSpeed);
    $(".panel").toggle(toggleSpeed);
    $("#inactivator").hide(1);
  })
  $(".MyGarden").click(function() {
    $("#hamWords").toggle(4);
    $("#cross").hide();
    $("#hamburger").show();
    $(".panel").toggle(4);
    $("#inactivator").hide(1);
  })
  $(".Help").click(function() {
    $("#hamWords").toggle(4);
    $("#cross").hide();
    $("#hamburger").show();
    $(".panel").toggle(4);
    $("#inactivator").hide(1);
  })


  //Toggle hourglass 
  $("#hourglass-alert").hide();

  $("#hourglass-btn").click(function(){
    if(timerOn == false){
      $("#hourglass-alert").show(1);
      setTimeout(function() {
        $('#hourglass-alert').hide(1);
      }, 3000);
    }
  });

    //Inactivator
  $('#inactivator').click(function() {
    $("#hamWords").toggle(4);
    $("#cross").hide();
    $("#hamburger").show();
    $(".panel").toggle(4);
    $("#inactivator").hide(1);
  });

  
  //confirmation screen
  $('#no-btn').click(function() {
    $("#confirmation-screen").hide();
  });

});

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
      $('#progressTimer').css('visibility', 'visible');

  		//Get draggable location
  		$('#timer-btn').mousemove(function(){
  			mins = parseInt( $('#timer-btn').css('top'), 10 );

  		  //For the barbershop animation
        var height = 530-mins;
        $('#progressTimer').css('height', height+'px');


  			
        //UPDATE THE TIMER VALUE

        if(mins > 500){
          userTime = 5*60;
          text_time = "5 min";
          $('#min-indicator').text('5min');
        }
		
  			if(mins < 500 && mins > 480){
				  userTime = 10*60;
				  text_time = "10 min";
  				$('#min-indicator').text('10min');
  			}
  			if(mins < 480 && mins > 460){
				  userTime = 10*60;
				  text_time = "15 min";
  				$('#min-indicator').text('15min');
  			}
  			if(mins < 460 && mins > 440){
				  userTime = 20*60;
				  text_time = "20 min";
  				$('#min-indicator').text('20min');
  			}
  			if(mins < 440 && mins > 420){
				  userTime = 25*60;
				  text_time = "25 min";
  				$('#min-indicator').text('25min');
  			}
  			if(mins < 420 && mins > 400){
				  userTime = 30*60;
				  text_time = "30 min";
  				$('#min-indicator').text('30min');
  			}
  			if(mins < 400 && mins > 380){
				  userTime = 35*60;
				  text_time = "35 min";
  				$('#min-indicator').text('35min');
  			}
  			if(mins < 380 && mins > 360){
				  userTime = 40*60;
				  text_time = "40 min";
  				$('#min-indicator').text('40min');
  			}
  			if(mins < 360 && mins > 340){
				  userTime = 45*60;
				  text_time = "45 min";
  				$('#min-indicator').text('45min');
  			}
  			if(mins < 340 && mins > 320){
				  userTime = 50*60;
				  text_time = "50 min";
  				$('#min-indicator').text('50min');
  			}
        if(mins < 320 && mins > 300){
		      userTime = 55*60;
		      text_time = "55 min";
          $('#min-indicator').text('55min');
        }
        if(mins < 300 && mins > 280){
		      userTime = 60*60;
		      text_time = "60 min";
          $('#min-indicator').text('60min');
        }
        /////////// Half way ////////////////
        if(mins < 280 && mins > 260){
		      userTime = 65*60;
		      text_time = "65 min";
          $('#min-indicator').text('65min');
        }
        if(mins < 260 && mins > 240){
		      userTime = 70*60;
		      text_time = "70 min";
          $('#min-indicator').text('70min');
        }
        if(mins < 240 && mins > 220){
		      userTime = 75*60;
		      text_time = "75 min";
          $('#min-indicator').text('75min');
        }
        if(mins < 220 && mins > 200){
		      userTime = 80*60;
		      text_time = "80 min";
          $('#min-indicator').text('80min');
        }
        if(mins < 200 && mins > 180){
		      userTime = 85*60;
		      text_time = "85 min";
          $('#min-indicator').text('85min');
        }
        if(mins < 180 && mins > 160){
		      userTime = 90*60;
		      text_time = "90 min";
          $('#min-indicator').text('90min');
        }
        if(mins < 160 && mins > 140){
		      userTime = 95*60;
		      text_time = "95 min";
          $('#min-indicator').text('95min');
        }
        if(mins < 140 && mins > 120){
		      userTime = 100*60;
		      text_time = "100 min";
          $('#min-indicator').text('100min');
        }
        if(mins < 120 && mins > 100){
		      userTime = 105*60;
		      text_time = "105 min";
          $('#min-indicator').text('105min');
        }
        if(mins < 100 && mins > 80){
		      userTime = 110*60;
		      text_time = "110 min";
          $('#min-indicator').text('110min');
        }
        if(mins < 80 && mins > 60){
		      userTime = 115*60;
		      text_time = "115 min";
          $('#min-indicator').text('115min');
        }
        if(mins < 60){
		      userTime = 120*60; //Change back to 120*60
		      text_time = "120 min";
          $('#min-indicator').text('120min');
          userTime = 5; 
          text_time = "5sec";
          $('#min-indicator').text('5sec');
    
        }

  		});

  	});

  	//Hide minute indicator
  	$('#timer-btn').mouseup(function(e){
  		$('#min-indicator').css('visibility', 'hidden');
      $('.ground').addClass('groundslide');

  		if(timerOn == false){
  			$('#nurture-btn').addClass("button-glow");
  		}
      	
      $('.ground').addClass('groundslideUP');
      $('.hands-img').animate({top: "52%"}, 550, "linear");
  	});


  	//Nurture Button Press
    $('#nurture-btn').click( function(e){

      //Stop Glow
      $('#nurture-btn').removeClass("button-glow");

      //Hides hourglass alert if opened when nurture button is pressed
      $("#hourglass-alert").hide();

		  //Start timer
		  if(timerOn == false){

        //Disable draggable slider
        $('#timer-btn').draggable('disable');

        //Update text
      	$('#banner').css('fontSize','60px');

        //Start timer with time set by user
        startTimer(userTime, $('#banner'));
				
        //Start slider
        countdown(userTime);

  			//Change words on button
  			$('#nurture-btn').html("Abandon <img src=\"https://github.com/a1peralt/ixd-skeleton/blob/master/resources/broken-heart-color.png?raw=true\" class=\"broken-heart\" />  ");
  			//show the planted plant image
  			$('.planted').show();
  			//hide the hand plant
  			$('.hands-img').hide();

        timerOn = true;

		  }

    //'Abandon' Behavior
		else{
      //Confirmation screen HERE
      $("#confirmation-screen").show();

      $('#yes-btn').click( function(){

        //Enable draggable slider
        $('#timer-btn').draggable('enable');

        //Stop Timer
        clearInterval(time);

        //Stop slider countdown animation
        $('#progressTimer').stop();
        $('#timer-btn').stop();
        $('#progressTimer').removeClass('barbershop');
      
        //Reset words on button
        $('#nurture-btn').html("Nurture <img src=\"https://github.com/a1peralt/ixd-skeleton/blob/master/resources/heart-color.png?raw=true\" class=\"heart-img\" />");

        timerOn = false;

        //Hide
        $("#confirmation-screen").hide(50);


        //Reset banner
        $('#banner').css('fontSize','65px');
        $('#banner').html('Set how long you\'d like to nurture');

        //Reset pics
        $('.planted').hide();

      });

      $('#no-btn').click( function(){
        //Hide confirmation screen and do nothing
        $("#confirmation-screen").hide(50);
      });
		}

	});

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
		      console.log(text_time);

          //Reset Button functionality
          $('#nurture-btn').html("Nurture <img src=\"https://github.com/a1peralt/ixd-skeleton/blob/master/resources/heart-color.png?raw=true\" class=\"heart-img\" />");
		      timerOn = false;

          //Stop slider
          $('#progressTimer').stop();
          $('#timer-btn').stop();
          $('#progressTimer').removeClass('barbershop');

          //Enable draggable slider
          $('#timer-btn').draggable('enable');
      
          $(".addToGardenScreen").toggle("fast");
          
          //get current date
          var today = new Date();
          var mm = today.toLocaleString('default', { month: 'short' });
          var dd = String(today.getDate()).padStart(2, '0');
          var yyyy = today.getFullYear();

          today = mm + ' ' + dd + ', ' + yyyy;

          //Don't add to garden screen
          $('#no').click(function() {
            $(".addToGardenScreen").hide();
            $('.planted').hide(toggleSpeed);
            $('.ground').removeClass('groundslide');

            //Reset banner
            $('#banner').css('fontSize','65px');
            $('#banner').html('Nurture Again!');

          });


		      //push plant grown info into json/mygarden page
          $('#plantName').val("Flower");
          $('#plantPic').val("https://pics.clipartpng.com/midle/Tropical_Flower_PNG_Clipart-194.png");
          $('#plantTime').val(text_time);
          $('#plantDate').val(today);

		    }
    };

    //Start timer immediately
    timer();
    time = setInterval(timer, 1000);
}


//Time-based countdown
function countdown(timeleft){
    $('#progressTimer').animate({ height: "0px"}, timeleft * 1000, "linear");
    $('#progressTimer').addClass('barbershop');

    $('#timer-btn').animate({top: "515px"}, timeleft * 950, "linear");
}