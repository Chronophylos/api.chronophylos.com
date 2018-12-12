var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var errorHandler = require('api-error-handler');
var helmet = require('helmet');

var port = process.env.PORT || 1337;
var app = express();

// Middlewares
app.use(helmet()); // for security
app.use(bodyParser.urlencoded({ extended: true })); // encodes stuff i dunno
app.use(bodyParser.json()); // json i dunno
app.use(morgan("combined")); // logging in apache 2 style
app.use(errorHandler()); // error output from code

// Import our routes
var twitchRoute = require("./api/routes/twitchRoute");
var parserRoute = require("./api/routes/parserRoute");

// Register them
twitchRoute(app);
parserRoute(app);

// Handle 404s
app.use(function(req, res) {
    res.status(404).send(req.method + " " + req.originalUrl + " not found");
});

// Start the server
app.listen(port);

console.log("api.chronophylos.com RESTful API server started on: " + port);