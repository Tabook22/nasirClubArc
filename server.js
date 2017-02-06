var express =require('express');
var path=require('path');
var bodyParser=require('body-parser');

var port=process.env.PORT || 8000;

var app=express();

//User Middelwears
app.use(express.static(path.join(__dirname,"public")));

app.get('/', function(req,res){
    res.sendFile("index.html");
});

//Run the server

app.listen(port, function(){
    console.log("Server is Running at Port: "+8000);
});