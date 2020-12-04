
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.use(express.static(__dirname + "/public", {
    index: false,
    immutable: true,
    cacheControl: true,
    maxAge: "30d"
}));

app.use(express.static(__dirname + "/js", {
    index: false,
    immutable: true,
    cacheControl: true,
    maxAge: "30d"
}));

app.use(express.static(__dirname + "/img", {
    index: false,
    immutable: true,
    cacheControl: true,
    maxAge: "30d"
}));

app.get('/', function(req, res) {
    res.render('pages/index.ejs');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});
app.listen(8085);
console.log('8080 is the magic port');