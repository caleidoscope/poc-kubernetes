//https://dev.to/damcosset/docker-and-nodejs-getting-started-3kao

var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  //res.send('Hello World')
  res.sendFile(`${__dirname}/home.html`)
})
 
app.listen(8080)