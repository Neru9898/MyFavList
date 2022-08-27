const express = require("express");
const app = express();
const PORT = 3000;
let list = [];

app.get("/", (req, res) => {
  res.status(201).send({ success: true, person: list });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
