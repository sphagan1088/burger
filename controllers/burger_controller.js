// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");
 console.log(burger);

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "name"
    ], [
        req.body.name
    ], function(result) {
        res.json({ id: result.instertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        name: req.body.name
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id " + req.paramsid;

    burger.delete(condition, function(result) {
        if(result.affectedRows == 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }

    })
})
module.exports = router;