var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var pp = express();

// view engine setup
pp.set('views', path.join(__dirname, 'views'));
pp.set('view engine', 'ejs');

pp.use(logger('dev'));
pp.use(express.json());
pp.use(express.urlencoded({ extended: false }));
pp.use(cookieParser());
pp.use(express.static(path.join(__dirname, 'public')));

pp.use('/', indexRouter);
pp.use('/users', usersRouter);

// catch 404 and forward to error handler
pp.use(function(req, res, next) {
  next(createError(404));
});

// error handler
pp.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = pp;
