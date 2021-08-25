const express = require("express");
const app = express();
const port = 3000;

const delayMs = 14000;

app.get("/", (req, res) => {
  console.log("Hello");
  setTimeout(() => {
    res.send(
      `Hello World! Delayed by ${delayMs / 1000} seconds (${delayMs}ms)`
    );
  }, delayMs);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
