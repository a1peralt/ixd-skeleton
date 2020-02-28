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

  $('#popup').hide();
  $('#garden-inactivator').hide();

});


/*
 * Function that is called when the document is ready.
 */
function initializePage() {

  $('#popClose').click( function(){
    $('#popup').hide(toggleSpeed);
    $('#garden-inactivator').hide();
  });

  //Register clicks
  $('#0').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#0 img").attr('src') + ">"  );
    $("#popText").text( $("#0 #name").text() + " " + $("#0 #date").text() + " " + $("#0 #time").text());
  });

  $('#1').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#1 img").attr('src') + ">"  );
    $("#popText").text( $("#1 #name").text() + " " + $("#1 #date").text() + " " + $("#1 #time").text());
  });

  $('#2').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#2 img").attr('src') + ">"  );
    $("#popText").text( $("#2 #name").text() + " " + $("#2 #date").text() + " " + $("#2 #time").text());
  });

  $('#3').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#3 img").attr('src') + ">"  );
    $("#popText").text( $("#3 #name").text() + " " + $("#3 #date").text() + " " + $("#3 #time").text());
  });

  $('#4').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#4 img").attr('src') + ">"  );
    $("#popText").text( $("#4 #name").text() + " " + $("#4 #date").text() + " " + $("#4 #time").text());
  });

  $('#5').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#5 img").attr('src') + ">"  );
    $("#popText").text( $("#5 #name").text() + " " + $("#5 #date").text() + " " + $("#5 #time").text());
  });

  $('#6').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#6 img").attr('src') + ">"  );
    $("#popText").text( $("#6 #name").text() + " " + $("#6 #date").text() + " " + $("#6 #time").text());
  });

  $('#7').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#7 img").attr('src') + ">"  );
    $("#popText").text( $("#7 #name").text() + " " + $("#7 #date").text() + " " + $("#7 #time").text());
  });

  $('#8').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#8 img").attr('src') + ">"  );
    $("#popText").text( $("#8 #name").text() + " " + $("#8 #date").text() + " " + $("#8 #time").text());
  });

  $('#9').click(function(){
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#9 img").attr('src') + ">"  );
    $("#popText").text( $("#9 #name").text() + " " + $("#9 #date").text() + " " + $("#9 #time").text());
  });

}