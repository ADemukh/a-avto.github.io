/*eslint strict:0  */
var bodyParser, cookieParser, express, favicon, logger, path;
var authRouter, cars, file, index, registration;
var app, db, passport;

express = require('express');
path = require('path');
favicon = require('serve-favicon');
logger = require('morgan');
cookieParser = require('cookie-parser');
bodyParser = require('body-parser');

index = require('./routes/index');
authRouter = require('./routes/auth');
cars = require('./routes/cars');
registration = require('./routes/registration');

db = require('./db');
passport = require('./auth/passport');
app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize()); // Add passport initialization
app.use(passport.session());    // Add passport initialization
app.use(express.static(path.join(__dirname, '../.build')));

app.use('/', index);
app.use('/cars', cars);
app.use('/auth', authRouter);
app.use('/registration', registration);

// catch 404 and forward to error handler
app.use(function use(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function use(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
