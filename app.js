var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var Article =  require('./models/article.model.ts')
var Categorie = require('./models/categorie.model')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser = require('body-parser')
var session = require('express-session')
var flash = require('connect-flash');




var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog')
  .then(() => console.log("connection reussie"))
  .catch(() => console.log("connection echec"))

// for (let i = 0; i < 5; i++) {
//   var newCategorie = new Categorie({
//     title: "categorie " + i,
//     description: " Diamou serigne Touba ndiaye Diamou serigne Touba ndiaye  "
//   })

//   // newCategorie.save()
// }


// var myArticle = new Article({
//   name: "aaaaaaa" ,
//   content: "aaaaaa" ,
//   date : new Date() 

// })

// myArticle.save()
// .then( () => console.log("Sauvegarde reussie"))
// .catch( () => console.log("sauvegard echec"))


// view engine setup


app.use(session({
  secret: 'Marseille100',
  resave: false,
  saveUninitialized: true,
})) ;

app.use(flash());


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
