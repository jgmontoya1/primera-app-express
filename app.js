// saludame 1 version 1.3
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  var nom = req.query.nombre
  if (!(nom).length) {
    nom = "desconocido"
  }res.send(`<h1>Hola ${nom}!</h1>`);
});

app.get('*', (req, res)=> {
  res.end('<h1>"Hola desconocido!"</h1>');
})

app.listen(3000, () => console.log('Listening on port 3000!')); 
