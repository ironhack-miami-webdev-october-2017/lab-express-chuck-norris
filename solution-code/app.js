const express = require('express');
const app = express();

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.listen(3000, () => {
console.log("Listening on port 3000");
});

// First iteration
app.get('/', (req, res) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "IronHack WebDev"
  };
  res.render('index', data);
});
