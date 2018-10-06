"use strict";
var MD5 = require('md5.js');

exports.welcome = function(req, res) {
    res.send("helo pepeL");
};

exports.love = function(req, res) {
    var left = req.query.left;
    var right = req.query.right;
    var bot_name = req.query["bot-name"];

    if (left == undefined) {
        res.send("Missing parameter left");
        return;
    }
    if (right == undefined) {
        res.send("Missing parameter right");
        return;
    }

    var lLeft = left.toLowerCase();
    var lRight = right.toLowerCase();

    if (lLeft == lRight) {
        res.send("We know you love yourself.");
        return;
    }

    if (lLeft == "moondye7" || lRight == "moondye7") {
        res.send("EVERYONE LOVES MEIN HERR gachiS");
        return;
    }

    if (lRight == bot_name) {
        res.send("Silly organic, bots cannot know love MrDestructoid BibleThump");
        return;
    }

    if ((lLeft == "furzbart" || lLeft == "doenerdude") && (lRight == "döner" || lRight == "doener")) {
        res.send("There is 100% <3 between Kevon and Zwiebeln zwiebelW");
        return
    }

    var key = getKey(lLeft, lRight);
    var hash = new MD5().update(key);
    var value = parseInt(hash.digest("hex"), 16);

    var score = value % 101;
    
    if (score == 69) {
        res.send("There is 69% \<3 between " + left + " and " + right + " gachiBASS Clap");
    }

    res.send("There is " + score + "% \<3 between " + left + " and " + right + " md7Stirni md7H");
};

function getKey(a, b) {
    if (a.charCodeAt(0) > b.charCodeAt(0)) {
        return a + b;
    }
    return b + a;
}