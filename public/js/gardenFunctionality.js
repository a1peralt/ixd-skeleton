//GLOBAL VARIABLES
var defaultTime = 15 * 60;
var userTime;
var timerOn = false;
var time;
var mins;
var text_time;

var toggleSpeed = 100;

var identify;


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

    identify = '0';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

  $('#1').click(function(){

    identify = '1';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

  $('#2').click(function(){

    identify = '2';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

  $('#3').click(function(){

    identify = '3';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

  $('#4').click(function(){

    identify = '4';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

  $('#5').click(function(){

    identify = '5';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

  $('#6').click(function(){

    identify = '6';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

  $('#7').click(function(){

    identify = '7';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

  $('#8').click(function(){

    identify = '8';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

  $('#9').click(function(){

    identify = '9';
    $('#popup').show(toggleSpeed);
    $('#garden-inactivator').show();

    $('#popPic').html( "<img height=99px width=99px src=" + $("#"+ identify+ " img").attr('src') + ">"  );
    
    $('#popName').text( $('#'+ identify + ' #name').text() );
    $('#popDate').text( $('#'+ identify + ' #date').text() );
    $('#popTime').text( $('#'+ identify + ' #time').text() );
  });

}