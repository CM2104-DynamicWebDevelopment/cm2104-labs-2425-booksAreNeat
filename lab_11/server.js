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
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    res.send("X + Y =" + (x+y));
});

app.get('/calc', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var operator = String(req.query.operator);

    if (operator = "add"){
        res.send("The answer is " + (x+y))
    } else if (operator = "subtract"){
        res.send("The answer is " + (x-y))
    } else if (operator = "multiply"){
        res.send("The answer is " + (x*y))
    } else {
        res.send("The answer is " + (x/y))
    }
})

app.listen(8080); 