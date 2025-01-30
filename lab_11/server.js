var knockknock = require('knock-knock-jokes');
var express = require('express'); 
var app = express(); 

app.get('/', function(req, res){ 
   res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("this is route 2");
});

app.get('/joke', function(req, res){
    var randomJoke = knockknock()
    res.send(randomJoke);
});

app.get('/add', function(req, res){
    const x = req.query.x;
    const y = req.query.y;
    let sum = parseInt(x+y, 10);
    res.send("X + Y =" + parseInt(sum));
});

app.listen(8080); 