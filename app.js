const express = require('express');
const app = express();

app.get('/user/:name', (req, res) => {
  res.send(`<h1>hola ${req.params.name} !</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
