const express = require("express");
const keywordsRouter = require("./src/routes/keywords.router.js");
const app = express();

app.use("/api/keywords", keywordsRouter);

app.get("*", (req, res) => {
    res.status(200).send("Ok.<br/> /api/keywords");
});

app.listen(3000, () =>
    console.log(`Server listening on port 3000, http://localhost:3000`)
);