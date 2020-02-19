//GLOBAL VARIABLES
var defaultTime = 15 * 60;
var userTime;
var timerOn = false;
var time;
var mins;
var text_time;


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
    $("#inactivator").show(1);
  });

  $("#cross").click(function(){
    $("#hamWords").toggle("slow");
    $("#cross").hide();
    $("#hamburger").show();
    $(".panel").toggle("slow");
    $("#inactivator").hide(1);
  })

  $(".Home").click(function() {
    $("#hamWords").toggle("slow");
    $("#cross").hide();
    $("#hamburger").show();
    $(".panel").toggle("slow");
    $("#inactivator").hide(1);
  })

    //Inactivator
  $('#inactivator').click(function() {
    $("#hamWords").toggle("slow");
    $("#cross").hide();
    $("#hamburger").show();
    $(".panel").toggle("slow");
    $("#inactivator").hide(1);
  });

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
      $('#progressTimer').css('visibility', 'visible');

  		//Get draggable location
  		$('#timer-btn').mousemove(function(){
  			mins = parseInt( $('#timer-btn').css('top'), 10 );

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
		      userTime = 1*60; //CHANGE THIS BACK TO 120*60
		      text_time = "120 min";
          $('#min-indicator').text('120min');
        }

  		});

  	});

  	//Hide minute indicator
  	$('#timer-btn').mouseup(function(e){
  		$('#min-indicator').css('visibility', 'hidden');
      $('#nurture-btn').addClass("button-glow");
      $('.ground').addClass('groundslide');
  	});


  	//Nurture Button Press
    $('#nurture-btn').click( function(e){
      $('#nurture-btn').removeClass("button-glow");

		//Start timer
		if(timerOn == false){

      //Update text
      $('#banner').css('fontSize','60px');
			
			//Start timer with default time
			if(userTime == null){
				 startTimer(defaultTime, $('#banner'));

        //Start slider
         countdown(defaultTime);

			}
			//Use the time set by user
			else{
				startTimer(userTime, $('#banner'));
				
        //Start slider
         countdown(userTime);
			}

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

      //Stop Timer
			clearInterval(time);
      
      //Stop slider countdown
      $('#progressTimer').stop();
      $('#timer-btn').stop();
			
			//Reset words on button
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
		      console.log(text_time);

          //Reset Button functionality
          $('#nurture-btn').html("Nurture <img src=\"https://github.com/a1peralt/ixd-skeleton/blob/master/resources/heart-color.png?raw=true\" class=\"heart-img\" />");
		      timerOn = false;
		  
		      //push plant grown info into json/mygarden page
		      //var text_time, 

			   var fs = require('../plantData.json');
			   console.log("hello");

			   fs.readFile('../plantData.json', 'utf-8', function(err, data) {
				    if (err) throw err

				  var data = JSON.parse(data);
				    data.plantData.push({
					   name : "filler",
					   image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1PC9OA_1iN5uVi4zFsSNIZeH3Q-qERHI5Pg_nUzMZpe1rfBi4",
					   date : "filler",
					   time : text_time
				  });

				  console.log(data);

				fs.writeFile('../plantData.json', JSON.stringify(data), 'utf-8', function(err) {
					if (err) throw err
					console.log('Done!');
				});
			});
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