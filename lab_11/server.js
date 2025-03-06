var knockknock = require('knock-knock-jokes');
var express = require('express'); 
var app = express(); 

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

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
    var operator = req.query.operator;
    int = 0;

    if (operator == "add"){
        int = x+y;
    } else if (operator == "subtract"){
        int = x-y;
    } else if (operator == "multiply"){
        int = x*y;
    } else {
        int = x/y;
    }

    res.send("The answer is " + int);
})

app.get('/getform', function(req, res){ 
    var name = req.query.name; 
    var quest = req.query.quest; 
    res.send("Hi "+name+" I am sure you will "+quest) ; 
});
    
app.post('/postform', function(req, res){ 
    var name = req.body.name; 
    var quest = req.body.quest; 
    res.send("Hi "+name+" I am sure you will "+quest) ; 
});

app.listen(8080); 