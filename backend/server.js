var router = require('./routes/routes.js')
const express = require('express');
const port = 2000
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())

app.use(router)

app.listen(port);