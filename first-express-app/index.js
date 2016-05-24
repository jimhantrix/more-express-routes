



var express = require("express");
var app = express();
var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/")
});

var correct_number = 7;

app.get("/pick-a-number", function(req, res){
  var num = req.query.num;
  if (num === correct_number){
    res.send("Nailed it!");
  } else if (num > correct_number){
    res.send("Too High!")
  } else {
    res.send("Too Low")
  }
});


app.get("/add", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x+y;
  res.send( total );
});

app.get("/multiply", function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  var total = x*y;
  res.send( total );
});
