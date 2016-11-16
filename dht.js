var sensorLib = require('node-dht-sensor');
var request = require('ajax-request');

sensorLib.initialize(11, 12); //#A
var interval = setInterval(function () { //#B
  read();
}, 2000);

function read() {
  var readout = sensorLib.read(); //#C
  var c = readout.temperature.toFixed(2);
  var fVal = ((c *9)/5)+ 32;
  console.log('Temperature: ' + fVal + 'F, ' + //#D
    'humidity: ' + readout.humidity.toFixed(2) + '%');

    if (fVal > 80 || fVal < 65) {
      request({
        "url": "https://ntxdemo14.workflowcloud.com/api/v1/workflow/published/e4e9832c-33fd-456f-8907-a8ae8421c1f8/instances?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJOV0MiLCJ3b3JrZmxvd0lkIjoiZTRlOTgzMmMtMzNmZC00NTZmLTg5MDctYThhZTg0MjFjMWY4IiwidGVuYW50SWQiOiJudHhkZW1vMTQiLCJpYXQiOjE0NzYzOTY3MDZ9.HJ22Xv8-PHJBrMBM5q8egmUHvMazfD80ESbFtf7xkk8",
            "method": "POST",
            "contentType": "application/json",
            "dataType": "json",
            "data": JSON.stringify({
                "startData": {
                    "se_data1": newData,
                    "se_new_email1": "sean.fiene@nintex.com"
                }
            }), function () {
              console.log("Workflow Started!");
            }
      });
    }
};

process.on('SIGINT', function () {
  clearInterval(interval);
  console.log('Bye, bye!');
  process.exit();
});