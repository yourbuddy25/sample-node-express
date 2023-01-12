/**
 * @author Léo Unbekandt
 */

// Trap SIGUSR1 to print memory heap information
process.on("SIGUSR1", () => {
  const used = process.memoryUsage();

  console.log("Printing memory usage")
  for (let key in used) {
    console.log(`-  ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }
});

var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', {});
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
