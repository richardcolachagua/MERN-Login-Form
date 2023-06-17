const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  // check if username and password  are valid
  if (username === "example" && password === "password") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
