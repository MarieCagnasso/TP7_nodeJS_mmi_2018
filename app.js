const express = require('express');
const app = express(); 
const mod = require("./module");

app.set('view engine', 'ejs');
const bp = require('body-parser');
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.get('/index.html', afficherIndex);
function afficherIndex(req, resp){
	resp.render("index.ejs");

}

app.get("/verification.html", afficherVerif);
function afficherVerif(req, resp){
	resp.render("validation.ejs");
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;