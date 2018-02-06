var express = require("express");
var burger = require("../models/burger");

router.get("/", function(req, res){
    burgers.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});

router.post("/api/burger", function(req, res) {
burgers.create([
    "name", "devoured"
], [
    req.body.burger_name, req.body.devoured
], function(result){
    res.json({ id: result.insertId });
});
});

module.exports = router;