"use strict";
const MD5 = require('md5.js');
const https = require("https")

const definitions = {
    "libertyass": "Freiheitsoarsch"
};

exports.welcome = function(req, res) {
    res.send("helo pepeL");
};

exports.weather = function(req, res) {
    var loc = req.params.location

    https.get("https://de.wttr.in/" + loc + "?format=%l:+%c+%t+%h+%w+%m", resp => {
        let data = ""

        resp.on("data", chunk => {
            data += chunk;
        });

        resp.on("end", () => {
            res.send(data)
        });

    }).on("error", (err) => {
        console.log("Error in weather command: " + err.message);
    });
}

exports.define = function(req, res) {
    var term = req.query.term;

    if (term == undefined) {
        res.send("Missing parameter term");
        return;
    }

    term = term.trim().replace("\u206D", "");

    if (term == "") {
        res.send("Missing parameter term");
        return;
    }

    let lTerm = term.toLowerCase();

    if (lTerm in definitions) {
        res.send(definitions[lTerm]);
        return;
    }

    https.get('https://api.urbandictionary.com/v0/define?term=' + term, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            let json = JSON.parse(data);
            if (json.list[0] !== undefined) {
                res.send(json.list[0].definition);
            } else {
                res.send("no definition found");
            }
        });

    }).on("error", (err) => {
        console.log("Error in define command: " + err.message);
    });

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

    left = left.trim().replace("\u206D", "");
    right = right.trim().replace("\u206D", "");

    if (left == "") {
        res.send("Missing parameter left");
        return;
    }
    if (right == "") {
        res.send("Missing parameter right");
        return;
    }

    var lLeft = left.toLowerCase();
    var lRight = right.toLowerCase();

    if (lLeft == lRight) {
        res.send("We know you love yourself.");
        return;
    }

    if (lRight == "moondye7") {
        res.send("EVERYONE LOVES MEIN HERR gachiS");
        return;
    }

    if (lRight == bot_name) {
        res.send("Silly organic, bots cannot know love MrDestructoid BibleThump");
        return;
    }

    if ((lLeft == "furzbart" || lLeft == "d0enerdude") && (lRight == "döner" || lRight == "doener")) {
        res.send("There is 100% <3 between Kevon and Zwiebeln zwiebelW");
        return;
    }

    var key = getKey(lLeft, lRight);
    var hash = new MD5().update(key);
    var value = parseInt(hash.digest("hex"), 16);

    var score = value % 101;
    
    if (score == 69) {
        res.send("There is 69% \<3 between " + left + " and " + right + " gachiBASS Clap");
        return;
    }

    var hEmote = "md7H";
    if (lRight.indexOf("cat") !== -1 || lRight.indexOf("katze") !== -1 || lRight.indexOf("kadse") !== -1) {
        hEmote = "md7H1";
    }

    res.send("There is " + score + "% \<3 between " + left + " and " + right + " md7Stirni " + hEmote);
};

function getKey(a, b) {
    if (a.charCodeAt(0) > b.charCodeAt(0)) {
        return a + b;
    } else {
        return b + a;
    }
}
