const express = require('express')
const app = express()

var jwt = require('jsonwebtoken');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
console.log(token);
// //backdate a jwt 30 seconds
// var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');

// sign with RSA SHA256
// var cert = fs.readFileSync('private.key');  // get private key
// var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'ES256'});

// sign asynchronously
jwt.sign({ foo: 'bar' }, cert, { algorithm: 'ES256' }, function(err, token) {
  console.log(token);
});
