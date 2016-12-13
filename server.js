var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/temp",function(req,res){
  res.sendFile(path + "temp.html");
});

router.get("/motion", function(req, res){
    res.sendFile(path + "motion.html");
});

router.get("/tellme", function(req, res){
    res.sendFile(path + "tellme.html");
});

router.get("/settings", function(req, res){
  res.sendFile(path + "settings.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
