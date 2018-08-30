var http = require('http');

var PORTA = 7000,
  PORTB = 7500;

function handleRequestA(request, response) {
  response.end('Nice thing about you :)');
}

function handleRequestB(request, response) {
  response.end('Bad thing about you >:(');
}

var SERVA = http.createServer(handleRequestA),
  SERVB = http.createServer(handleRequestB);

SERVA.listen(PORTA, function () {
  console.log("Server listening on: http://localhost:" + PORTA);
});

SERVB.listen(PORTB, function () {
  console.log("Server listening on: http://localhost:" + PORTB);
});