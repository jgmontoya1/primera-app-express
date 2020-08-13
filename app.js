// saludame 2
var express = require('express');
var app = express();

app.get('/makers/:name', (req, res) => {
    var nom = req.params.name;
    if (!(nom).length) {nom='desconocido';
  }
    var miString2 =(nom.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))));
    res.send(`<h1>Hola ${miString2}!` );
  })
app.listen(3000, () => console.log('Listening on port 3000!'));
