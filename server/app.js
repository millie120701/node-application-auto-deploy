const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Node application");
});

app.listen(port, () => {
  console.log(`Lstening at http://localhost:${port}`);
});
