const express = require("express");
const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./dec-enc");

const app = express();
app.use(express.json());

const port = 3100;

app.get("/", (req, res) => {
  res.send("API JWT works!");
});

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
  res.json(
    ValidateJWT(req.body.header, req.body.token, req.body.key)
  );
});

app.listen(port, () => {
  console.log(`SerVer running on port' ${port}`);
});




































































































