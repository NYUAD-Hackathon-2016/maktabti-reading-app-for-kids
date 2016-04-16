var fs = require ('fs');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var models = path.join(__dirname,'models');
var routes = require('./routes/index');
var categories = require('./routes/categories');
var questions = require('./routes/questions');
var articles = require('./routes/articles');

var app = express();

fs.readdirSync(models).filter(function(file) {
  return file.lastIndexOf('.js') != -1
}).forEach(function(file) {
  console.log('Loading Model ' + file)
  require(path.join(models, file))
})

// Initilaze the DB
var db = mongoose.connect('mongodb://localhost/maktabti').connection;
db.on('error', function(error){
  console.error("Error db not connected");
})
db.once('open',function(){
  console.log("Connected");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api/categories', categories);
app.use('/api/questions', questions);
app.use('/api/articles', articles);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
