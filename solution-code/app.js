const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

app.set('layout', 'layouts/main-layout');
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log("Listening on port 3000");
});


// First iteration
app.get('/random', (req, res) => {
  // Retrieve a random chuck joke
  client.getRandomJoke().then(function (response) {
      res.render('index', response);
  });
});

// Second iteration
app.get('/categories', (req, res) => {
  client.getJokeCategories().then(function (response) {
    let data = {categories: response};
      res.render('categories', data);
  });
});

app.get('/categories/:category', (req, res) => {
  client.getRandomJoke(`${req.params.category}`).then(function (response) {
    res.render('joke-by-category', response);
  });
});

// Third iteration
app.get('/search', (req, res) => {
  let data = {joke: null};

  res.render('search-form', data);
});

app.post('/search', (req, res) => {
  let keyword = req.body.keyword;

  client.search(keyword).then( (response) => {
    let randomIndex = Math.floor(Math.random() * response.items.length -1);
    console.log(response.items[randomIndex]);
    res.render('search-form', {joke: response.items[randomIndex]});
  })
})
