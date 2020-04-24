const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "../build")));

const PORT = process.env.PORT || 4000;
app.listen(PORT);
