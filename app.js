const express = require("express");
const app = express();
const port = 3000;

const delayMs = 1000;

app.get("/", (req, res) => {
  console.log("Hello");
  setTimeout(() => {
    res.send(
      `
      <style>
        h1 {
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
      </style>
      <h1>Hello World! Delayed by ${delayMs / 1000} seconds (${delayMs}ms)</h1>`
    );
  }, delayMs);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
