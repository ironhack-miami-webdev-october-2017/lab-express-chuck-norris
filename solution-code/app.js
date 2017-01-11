const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.listen(3000, () => {
console.log("Listening on port 3000");
});


// First iteration
app.get('/random', (req, res) => {
  // Retrieve a random chuck joke
  client.getRandomJoke().then(function (response) {
      console.log(response);
      res.render('index', response);
  }).catch(function (err) {
      // handle error
  });
});
