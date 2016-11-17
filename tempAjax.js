$(document).ready(function(){
//alert("Hello World!");
setInterval(function(){
//call temp $ajax
$.getJSON("http://10.136.18.26:8484/pi/sensors/temperature",
function(data){
$('#tval').html(data.query.results.json.value);
});
}, 5000);
});