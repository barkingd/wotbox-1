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

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

var Gpio = require('onoff').Gpio,
sensor = new Gpio(17, 'in', 'both');
sensor.watch(function (err, value) {
if (err) exit(err);
console.log(value ? 'there is some one!' : 'not anymore!');
var m = document.getElementById("motionVal");
m.value(value ? 'There is some one!': "It is lonely!");
});
function exit(err) {
if (err) console.log('An error occurred: ' + err);
sensor.unexport();
console.log('Bye, bye!')
process.exit();
}
process.on('SIGINT', exit);