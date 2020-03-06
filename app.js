
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var io = require('socket.io');

//var index = require('./routes/index');
var nurture = require('./routes/nurture');

var mygarden = require('./routes/garden');

var settings = require('./routes/settings');

var login = require('./routes/login');

var collab = require('./routes/collab');

var help = require('./routes/help');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//First Screen
app.get('/', login.view);

//Second Screen (logged in)
app.get('/logged/home', nurture.user);
//Second Screen (guest)
app.get('/guest/home', nurture.guest);

//Garden Pages
app.get('/mygarden', mygarden.viewAlt);
app.get('/logged/home/addPlant', mygarden.addPlant);

//For A/B testing
app.get('/mygarden/page_A', mygarden.view);
app.get('/mygarden/page_B', mygarden.viewAlt);

//Login pages
app.get('/')
app.get('/login', login.view);

//Help page
app.get('/logged/help', help.user);
app.get('/guest/help', help.guest);

//Collaborate (logged in)
app.get('/logged/collaborate', collab.user);
//Collaborate (guest)
app.get('/guest/collaborate', collab.guest);

// Example route
// app.get('/users', user.list);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//Socket.io stuff
var io = io(server);

io.on('connection', function (socket) {
  console.log('socket connected');
  io.emit('connected');

  socket.on('focused', function(){
    io.emit('focused');
  });

  socket.on('unfocused', function(){
    io.emit('unfocused');
  });

});