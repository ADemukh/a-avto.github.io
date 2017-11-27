/*eslint strict:0  */
var bodyParser, cookieParser, cookieSession, cors, express, favicon, logger, path;
var app, config, db, passport, router;

express = require('express');
cors = require('cors');
path = require('path');
favicon = require('serve-favicon');
logger = require('morgan');
cookieParser = require('cookie-parser');
cookieSession = require('cookie-session');
bodyParser = require('body-parser');

config = require('./config');
router = require('./routes/');

db = require('./db');
passport = require('./auth/passport');
app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(cookieParser(config.cookie.parser));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession(config.cookie.session));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../.uploads')));
app.use(express.static(path.join(__dirname, '../.build')));

// routes
app.use('/', router);

// catch 404 and forward to error handler
app.use(function use(req, res, next) {
  var err;

  err = new Error('Not Found');
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
