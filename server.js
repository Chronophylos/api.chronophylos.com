var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var helmet = require('helmet')

var port = process.env.PORT || 1337
var app = express()

// Middlewares
app.use(helmet()) // for security
app.use(bodyParser.urlencoded({ extended: true })) // encodes stuff i dunno
app.use(bodyParser.json()) // json i dunno
app.use(morgan('combined')) // logging in apache 2 style
// error output from code
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('internal server error')
})

// Import our routes
var twitchRoute = require('./api/routes/twitchRoute')

// Register them
twitchRoute(app)

// Handle 404s
app.use(function (req, res) {
  res.status(404).send(req.method + ' ' + req.originalUrl + ' not found')
})

// Start the server
app.listen(port)

console.log('api.chronophylos.com RESTful API server started on: ' + port)
