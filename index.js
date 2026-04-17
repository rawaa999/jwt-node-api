const express = require("express");
const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./dec-enc");

const app = express();
app.use(express.json());

const port = 3100;

app.get("/", (req, res) => {
  res.send("API JWT works!");
});
const cors = require("cors");
app.use(cors());

app.post("/api/GenerateJWT", (req, res) => {
  res.json(
    GenerateJWT(req.body.header, req.body.claims, req.body.key)
  );
});

app.post("/api/DecodeJWT", (req, res) => {
  res.json(
    DecodeJWT(req.body.sJWS)
  );
});

app.post("/api/ValidateJWT", (req, res) => {
  const user_name = req.body.name;

  if (user_name === "ahmed") {
    res.json({ response: true });
  } else {
    res.json({ response: false });
  }
});

app.listen(port, () => {
  console.log(`SerVer running on port' ${port}`);
});