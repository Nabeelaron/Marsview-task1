require("../../config/database");
const fs = require("fs");

const model = require("../models/keywords.model");

console.log("Reading datas from file...");
let data = [{
    transcript: JSON.parse(fs.readFileSync("src/data/static/keywords.json"))
        .transcript,
}, ];

console.log("Reading datas from file... Completed");
console.log("Loading into DB...");
model.collection.insertMany(data, function(err, r) {
    if (err) {
        console.log("Failed.", err);
    } else {
        console.log("Completed.");
    }
});