const express = require("express");
const keywordsRouter = require("./src/routes/keywords.router.js");
const app = express();

app.get("/", (req, res) => {
    res.send("Successful response.");
});

app.use("/api/keywords", keywordsRouter);

app.listen(process.env.PORT, () =>
    console.log(`Server listening on port ${process.env.PORT}`)
);