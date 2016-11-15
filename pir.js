var Gpio = require('onoff').Gpio,
sensor = new Gpio(17, 'in', 'both');
//# PIR.JS Sensor
console.log("The sensor should be working!");
sensor.watch(function (err, value) {
if (err) exit(err);
console.log(value ? 'there is some one!' : 'not anymore!');
 $('#motionVal').val(value);
 $('#motionVal').text("Hello!")
});
function exit(err) {
if (err) console.log('An error occurred: ' + err);
sensor.unexport();
console.log('Bye, bye!')
process.exit();
}
process.on('SIGINT', exit);