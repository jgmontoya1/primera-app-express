const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var nom = req.query.nombre
  if (!(nom).length) {
    nom = "desconocido"
  }
  res.send("<h1> Hola " + nom + "! </h1>");
});

app.listen(3000, () => console.log('Listening on port 3000!'));