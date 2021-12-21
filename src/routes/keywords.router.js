var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.send("Keywords home page");
});

router.get("/all", function(req, res) {
    // res.send("all");
});

module.exports = router;