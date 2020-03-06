//GLOBAL VARIABLES
var defaultTime = 15 * 60;
var userTime;
var timerOn = false;
var time;
var mins;
var text_time;

var toggleSpeed = 250;

//toggle vars
var on1 = on2 = on3 = on4 = on5 = false;


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

  $('.dropContent').hide();
	initializePage();

});


/*
 * Function that is called when the document is ready.
 */
function initializePage() {

  $('#nurture').unbind('click').click( function(e){
    var element = '#nurture-txt';
    $(element).slideToggle(toggleSpeed);
    if(on1 == false){
      $('#nurture .triangle').css('transform', 'rotate(180deg)');
      on1 = true;
    }
    else{
      $('#nurture .triangle').css('transform', 'rotate(0deg)');
      on1 = false;
    }
  });

  $('#time').unbind('click').click( function(e){
    var element = '#time-txt';
    $(element).slideToggle(toggleSpeed);
    if(on2 == false){
      $('#time .triangle').css('transform', 'rotate(180deg)');
      on2 = true;
    }
    else{
      $('#time .triangle').css('transform', 'rotate(0deg)');
      on2 = false;
    }
  });

  $('#abandon').unbind('click').click( function(e){
    var element = '#abandon-txt';
    $(element).slideToggle(toggleSpeed);
    if(on3 == false){
      $('#abandon .triangle').css('transform', 'rotate(180deg)');
      on3 = true;
    }
    else{
      $('#abandon.triangle').css('transform', 'rotate(0deg)');
      on3 = false;
    }
  });

  $('#garden').unbind('click').click( function(e){
    var element = '#garden-txt';
    $(element).slideToggle(toggleSpeed);
    if(on4 == false){
      $('#garden .triangle').css('transform', 'rotate(180deg)');
      on4 = true;
    }
    else{
      $('#garden .triangle').css('transform', 'rotate(0deg)');
      on4 = false;
    }
  });

  $('#grow').unbind('click').click( function(e){
    var element = '#grow-txt';
    $(element).slideToggle(toggleSpeed);
    if(on5 == false){
      $('#grow .triangle').css('transform', 'rotate(180deg)');
      on5 = true;
    }
    else{
      $('#grow .triangle').css('transform', 'rotate(0deg)');
      on5 = false;
    }
  });

  $('#logged').unbind('click').click( function(e){
    var element = '#log-txt';
    $(element).slideToggle(toggleSpeed);
    if(on5 == false){
      $('#logged .triangle').css('transform', 'rotate(180deg)');
      on5 = true;
    }
    else{
      $('#logged .triangle').css('transform', 'rotate(0deg)');
      on5 = false;
    }
  });
}