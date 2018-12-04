var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var api = require('./routes/api.route')

var bluebird = require('bluebird')

var fs = require('fs');
var mongoPassword = fs.readFileSync('./mongoPassword.txt', 'utf8');

var mongoose = require('mongoose')
mongoose.Promise = bluebird

var mongooseConnectionString = 'mongodb://ToDoAppReadWriteUser:';
mongooseConnectionString += mongoPassword;
mongooseConnectionString += '@100.34.18.126:65503/todoapp?authsource=admin'

mongoose.connect(mongooseConnectionString, { useNewUrlParser: true })
  .then(() => { console.log('Success! Connected to Mongo Database at + ' + mongooseConnectionString) })
  .catch(() => { console.log('Error Connecting to Mongo Database at + ' + mongooseConnectionString) });

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', api);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
