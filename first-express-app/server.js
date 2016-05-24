'use strict'

const express = require('express');
const app     = express(); //calling expresse method assigning it to app
const port    = process.env.PORT || 3000;
const router  = express.Router();

const taquerias = [
// {restuarant: "La Taqueria", id: 14},
// {estuarant: "El Farolito", id: 23},
// {estuarant: "Taqueria Cancun", id: 35}
// ];
//
// app.use(express.static('public'));
// app.use('/', router);
// var urlencodedparser = bodyParser.urlencodedparser
//
// app.set('views', './views');
// app.set('view engine','ejs');
//
// router.get('/', function(req, res) {
//  res.send("You're Home!");
//  res.render('index');
// });
//
// app.get('/api/taquerias', function(req, res) {
//  res.json(taquerias);
// });
//
// router.get('/api/taquerias/:id', function(req, res){
//  res.json(taquerias);
// });
// router.get('api/api/taquerias/:id',function(req,res,next){
//   consoole.log(req.params.id);
//   next();
//     },  function(req,res,next){
//           for(var i = 0; i < taquarias.length;i++)
//             if(req.params.id == taquerias[i].id){
//               res.json(taquerias[i]);
//     }
//
//   }
// });
//
//    router.post('api/taquerias',urlencodedparser,function(req,res){
  // taquerias.push(req.body);

 }

app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("Your color is: " + choice);
});
