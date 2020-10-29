const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let requestQuery;
  req.query.nombre && req.query.nombre.length > 0
    ? (requestQuery = `Hola ${req.query.nombre}!`)
    : (requestQuery = "Hola desconocido!");
  res.send(`<h1>${requestQuery}</h1>`);
});

app.listen(3000, () => console.log("Listening on port: 3000"));
