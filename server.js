var express = require("express"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    app = express(),
    port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

// Import our routes
var twitchRoute = require("./api/routes/twitchRoute");

// Register them
twitchRoute(app);

// Start the server
app.listen(port);

console.log("api.chronophylos.com RESTful API server started on: " + port);