"use strict";

exports.welcome = function(req, res) {
    res.send("helo pepeL");
};

exports.love = function(req, res) {
    var left = req.query.left;
    var right = req.query.right;

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

    if (lLeft == "streamelements" || lRight == "streamelements") {
        res.send("Silly organic lifesubstance bots can't feel love MrDestructoid BibleThump");
        return;
    }

    if ((lLeft == "furzbart" || lLeft == "doenerdude") && (lRight == "döner" || lRight == "doener")) {
        res.send("There is 100% <3 between Kevon and Zwiebeln zwiebelW");
    }

    var total = getNum(left) * getNum(right);
    var score = total % 100;

    res.send("There is " + score + "% \<3 between " + left + " and " + right + " md7Stirni md7H");
};


function getNum(A) {
    var outputNum = 0;
    for (var i = 0; i < A.length; i++) {
        outputNum += A.charCodeAt(i);
    }
    return outputNum;
}