var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/build'));

app.get('/todo', function (req, res) {
  res.send('Index.js!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});