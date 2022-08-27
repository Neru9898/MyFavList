const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
let list = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send({ success: true, person: list });
});

app.post("/", (req, res) => {
  const data = req.body;
  list = list.concat(data);
  res.status(200).send({ success: true, person: list });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
