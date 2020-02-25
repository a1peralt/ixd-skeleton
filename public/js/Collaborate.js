$(document).ready( function(){

	var socket = io();

	socket.on('connected', function(){
		console.log('connected!');
		socket.emit('received');
	})

	$('#counts').click( function(){
		$('#clicked').text('Yes!');
		socket.emit('clicked');
	});

	socket.on('clicked', function(){
		$('#clicked').text('Yes!');
	});

});