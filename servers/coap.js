var coap = require('coap'),  //#A
  utils = require('./../utils/utils');

var port = 5683;

coap.createServer(function (req, res) {
  console.info('CoAP device got a request for %s', req.url);
  if (req.headers['Accept'] != 'application/json') {
    res.code = '4.06'; //#B
    return res.end();
  }
  switch (req.url) { //#C
    case "/co2":
      respond(res, {'co2': utils.randomInt(0, 1000)}); //#D
      break;
    case "/temp":
      respond(res, {'temp': utils.randomInt(0, 40)});
      break;
    default:
      respond(res);
  }
}).listen(port, function () {
  console.log("CoAP server started on port %s", port)
});//#E

function respond(res, content) { //#F
  if (content) {
    res.setOption('Content-Format', 'application/json');
    res.code = '2.05';
    res.end(JSON.stringify(content));
  } else {
    res.code = '4.04';
    res.end();
  }
};