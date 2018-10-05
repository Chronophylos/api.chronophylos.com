var express = require("express"),
    app = express(),
    port = process.env.PORT || 1337,
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import our routes
var twitchRoute = require("./api/routes/twitchRoute");

// Register them
twitchRoute(app);

// Start the server
app.listen(port);

console.log("api.chronophylos.com RESTful API server started on: " + port);