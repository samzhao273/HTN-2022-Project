import router from "./routes/routes.js"
import express from "express"
import bodyParser from 'body-parser'

const port = 2000
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())

app.use(router)

app.listen(port);

