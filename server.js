var express = require('express'),
  passport = require('passport'),
  BasicStrategy = require('passport-http').BasicStrategy;


// Use the BasicStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.
var app = express();

app.use(passport.initialize());

app.use(express.static(__dirname + '/public'));


var port = Number(process.env.PORT || 5000);
app.listen(port, function () {
  console.log("Listening on " + port);
});