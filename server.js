var express = require('express');

// Express server
var app = express();
// Get the process env port (needed by Heroku)
const PORT = process.env.PORT || 3000;


// A bit of code to handle OpenWeatherMap.org http
app.use(function (req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

// Listen on PORT
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
