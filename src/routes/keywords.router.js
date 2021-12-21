const express = require("express");
const router = express.Router();
require("../../config/database");
const model = require("../models/keywords.model");

async function queryDB(type) {
    let aggregationPipeline = [];
    if (type) {
        aggregationPipeline.push({
            $match: { "transcript.keywords.type": type },
        });
    }
    aggregationPipeline.push({ $unwind: "$transcript" });
    aggregationPipeline.push({ $unwind: "$transcript.keywords" });
    if (type) {
        aggregationPipeline.push({
            $match: { "transcript.keywords.type": type },
        });
    }

    aggregationPipeline.push({
        $group: {
            _id: "$transcript.keywords.type",
            keywords: { $push: "$transcript.keywords.keyword" },
        },
    });
    return await model.aggregate(aggregationPipeline);
}

router.get("/", function(req, res) {
    let data = `Help<ul><li>/all - to get all the keywords & types</li><li>/[value] - to get keywords of type DNN, NER & Techphrase</li></ul>`;
    res.send(data);
});

router.get("/all", async function(req, res) {
    res.json(await queryDB());
});

router.get("/:type", async function(req, res) {
    let keywordsType = {
        dnn: "phrase cloud",
        techprase: "terms",
        ner: "entities",
    };
    req.params.type = req.params.type.toLowerCase();

    let type = Object.keys(keywordsType).find(
        (item) => req.params.type == keywordsType[item]
    );

    type
        ?
        res.json(await queryDB(type.toUpperCase())) :
        res.redirect("/api/keywords/");
});

module.exports = router;