var express = require('express');
var app = express();
var date = new Date;

app.get('/service', function (req, res) {
  if (req.query.type == "iso") {
    res.send(date.toISOString());
  } else if (req.query.type == "date") {
    res.send(date.toDateString());
  } else {
    res.send("Erreur");
  }

});

app.listen(1337, function(){
  console.log('listening on *:1337');
});
