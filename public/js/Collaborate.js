$(document).ready( function(){

	var socket = io();

	socket.on('connected', function(){
		console.log('connected!');
		socket.emit('received');
	})

	socket.on('focused', function(){
		$('.test').text("Focused");
	});

	socket.on('unfocused', function(){
		$('.test').text("Not focused");
	});

});


$(window).focus(function(){
	var socket = io();
	socket.emit('focused');
});


$(window).blur(function(){
	var socket = io();
	socket.emit('unfocused');
});