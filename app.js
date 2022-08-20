var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var Article =  require('./models/article.model.ts')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog')
.then( () => console.log("connection reussie"))
.catch( () => console.log("connection echec"))


// var myArticle = new Article({
//   name: "aaaaaaa" ,
//   content: "aaaaaa" ,
//   date : new Date() 
  
// })

// myArticle.save()
// .then( () => console.log("Sauvegarde reussie"))
// .catch( () => console.log("sauvegard echec"))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
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
