var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var casesRouter = require('./routes/cases');
const partiesRouter = require('./routes/parties')
const conclusionsRouter = require('./routes/conclusions')
const representativesRouter = require('./routes/representatives')
const sclRouter = require('./routes/scl')
const informationRouter = require('./routes/scl')

var app = express();

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

const version = 'v1';

app.use(`/${version}/`, indexRouter);
app.use(`/${version}/cases`, casesRouter);
app.use(`/${version}/parties`, partiesRouter);
app.use(`/${version}/conclusions`, conclusionsRouter);
app.use(`/${version}/representatives`, representativesRouter);
app.use(`/${version}/scl`, sclRouter);
app.use(`/${version}/information`, informationRouter);


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
