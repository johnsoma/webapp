// import required libraries                                                                                                 
var express    = require("express");
var ejs        = require('ejs');
var connect    = require('connect');

// initialize paths to other pages                                                                                           
var routes     = require('./controller/index');
var user       = require('./controller/user');
var survey     = require('./controller/survey');

// Application initialization                                                                                                
var app = express();

// Configuration                                                                                                             
app.use(connect.urlencoded());
app.use(connect.json());

// Configure view engine                                                                                                     
app.set('view engine', 'ejs');
app.set('views', 'views');

// initialize variables                                                                                                      
app.set('subtitle', 'Lab 19');
app.set('firstname');
app.set('lastname');
app.set('sex');
app.set('transport');

// Begin listening                                                                                                           

app.use('/', routes);
app.use('/users', user);
app.use('/survey', survey);
app.set('port', 8008);
app.listen(app.get('port'));
console.log("Express server listening on port %d in %s mode", app.get('port'));
