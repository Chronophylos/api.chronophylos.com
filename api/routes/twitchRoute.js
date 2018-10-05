"use strict";

module.exports = function(app) {
    var twitch = require("../controllers/twitchController");

    // twitch routes
    app.route("/twitch")
        .get(twitch.welcome);
    
    app.route("/twitch/love")
        .get(twitch.love);
};