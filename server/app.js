/*eslint strict:0  */
var bodyParser, cookieParser, cookieSession, cors, express, favicon, logger, path;
var authRouter, carsRouter, filesRouter, indexRouter, profileRouter, shopsRouter;
var app, db, passport;

express = require('express');
cors = require('cors');
path = require('path');
favicon = require('serve-favicon');
logger = require('morgan');
cookieParser = require('cookie-parser');
cookieSession = require('cookie-session');
bodyParser = require('body-parser');

indexRouter = require('./routes/index');
authRouter = require('./routes/auth');
carsRouter = require('./routes/cars');
filesRouter = require('./routes/files');
profileRouter = require('./routes/profile');
shopsRouter = require('./routes/shops');

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
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['aavto', 'demukhfamily.com', 'stkvcjhvsgfytzxnjhs'],
  maxAge: 48 * 60 * 60 * 1000   // 48 hours
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize()); // Add passport initialization
app.use(passport.session());    // Add passport initialization
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../.build')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/cars', carsRouter);
app.use('/files', filesRouter);
app.use('/profile', profileRouter);
app.use('/shops', shopsRouter);

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
