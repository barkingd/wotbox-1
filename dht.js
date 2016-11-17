var sensorLib = require('node-dht-sensor');


sensorLib.initialize(11, 12); //#A
var interval = setInterval(function () { //#B
  read();
}, 2000);

function read() {
  var readout = sensorLib.read(); //#C
  var c = readout.temperature.toFixed(2);
  var fVal = ((c *9)/5)+ 32;
  var se_new_email1;
  console.log('Temperature: ' + fVal + 'F, ' + //#D
    'humidity: ' + readout.humidity.toFixed(2) + '%');
};

process.on('SIGINT', function () {
  clearInterval(interval);
  console.log('Bye, bye!');
  process.exit();
});

 