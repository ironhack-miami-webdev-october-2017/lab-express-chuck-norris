const express        = require('express');
const app            = express();

const expressLayouts = require('express-ejs-layouts');
const bodyParser     = require('body-parser');
const path           = require('path');

// https://www.npmjs.com/package/chucknorris-io
const Chuck          = require('chucknorris-io');
const client         = new Chuck();

app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout');


// First iteration
app.get("/", (req, res) => {
  res.redirect('/random');
});

app.get('/random', (req, res) => {
  // Retrieve a random chuck joke
  client.getRandomJoke().then(function (joke) {
      res.render('index', {joke: joke.value});
  });
});

// Second iteration
app.get('/categories', (req, res) => {
  client.getJokeCategories().then(function (categories) {
    res.render('categories', {categories});
  });
});

app.get('/categories/:category', (req, res) => {
  let category = req.params.category;

  client.getRandomJoke(category).then(function (joke) {
    res.render('joke-by-category', {joke: joke.value, category});
  });
});

// Third iteration
app.post('/search', (req, res) => {
  let keyword = req.body.keyword;

  client.search(keyword).then( (jokes) => {
    let randomIndex = Math.floor(Math.random() * jokes.items.length -1);
    let joke = jokes.items[randomIndex];

    res.render('joke-by-search', {joke: joke.value, query: keyword} );
  })
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
