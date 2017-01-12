![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# PP | Express: Chuck Norris Jokes

## Learning Goals

After this learning unit, you will be able to:

- Create a basic web application using Express
- Add a static route to display content
- Get in touch for the first time with an API
- Create a request to Chuck Norris API to retrieve content and display it in the proper route

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

Please, push every file needed to make your app properly on GitHub before creating the pull request.

## Introduction

[Chuck Norris](https://en.wikipedia.org/wiki/Chuck_Norris) is a famous actor and martial artist that starred in many American movies from the '80s and '90s.

![Chuck Norris Picture](https://i.imgur.com/hAmRT5L.jpg =300x)

After his film career died off, the *people of the internet* turned him into a living meme. [Chuck Norris Facts](https://en.wikipedia.org/wiki/Chuck_Norris_facts) quickly became all the rage. These "facts" are just hyperbolic jokes are the skills of Chuck Norris.

> Chuck Norris counted to infinity... twice

> Chuck Norris can put out a fire... with gasoline

> Michael Jackson can moonwalk but Chuck Norris can sun walk

Today, we will be building a Chuck Norris joke finder using Express.

## Setting up a new project

Once you fork this repo, remember to initialize a new project

```
$ npm init
```
Type `enter` to approve default settings.

Install `express` into your project and `ejs` to use views. Remember to tell your Express app that EJS will be in charge of rendering the HTML and specify the path where the views will be available.

At the end of the exercise you should have at least three routes created:

- `/random`- To display a random joke
- `/categories` - To display a joke by category
- `/search` - To find a joke by keyword (so it will have to display a form to be filled by the user)


## Iteration 1 - Get a random joke

To interact with the API, you need to install a package [chucknorris-io](https://www.npmjs.com/package/chucknorris-io):

```
$ npm install --save chucknorris-io
```

Remember you need to require the package once installed. In this case it will be:

```javascript
const Chuck    = require('chucknorris-io');
const client   = new Chuck();
```

Create the proper route using Express for the root of the project ('/random'). Once you go to `localhost:3000/random`, the application should request a random joke and show it in a `p` tag.


## Iteration 2 - Get a joke by category

### The Categories List

To be able to filter our jokes by category, first we need to display the available categories.

Create a new route `/categories` in your Express application. Once the user goes to `localhost:3000/categories`, the application will show the full list of joke categories.

The [chucknorris-io](https://www.npmjs.com/package/chucknorris-io) package offers a method to retrieve the available categories:

```javascript
client.getJokeCategories()
  .then((response)=>  {
     // use the response here
  })
  .catch((err)=> {
    console.error(err);
  });

```


:bulb: When your app requests the list of categories to the Chuck Norris API, the response will be an array. Prepare the data to show it in the view by saving it in an object.


Each category will be a link. When the user clicks on one of them it should send him to the category. Take a look at this:

- If we click on `dev`, it should send us to `localhost:3000/categories/dev`
- If we click on `sport`, it should send us to `localhost:3000/categories/sport`

Configure the anchor links to match this criteria

### The URL with the new joke

In your `app.js`, create a new route built using the name of the selected category as a parameter (remember the `params`).

Use this parameter to make the request to the API using the method provided by the [chucknorris-io](https://www.npmjs.com/package/chucknorris-io) package.

Display the result in the view `joke-by-category.ejs`

## Iteration 3 - Get a joke by keyword

### The Form

Users will need a field to enter the keyword that your application will use to request the joke.

Create a new get route `/search` in your Express application. Once the user goes to `localhost:3000/search`, the application will display a form.

Create a new view `search-form.ejs` to describe the form. Add a `post` action and send it to the same route `/search`.

The form will have one input with the id and label `keyboard`.

Create a new post route `/search` to capture the data sent before. In this route, let's perform the search using the [chucknorris-io](https://www.npmjs.com/package/chucknorris-io) package.

```
client.search(searchTerm).then(function (response) {
  // to stuff here 
}).catch(function (err) {
  // handle error 
});
```

### Rendering the result

Use the same route to renden your result.

## Extra Resources

- [Express Routing](https://expressjs.com/en/guide/routing.html)
- [chucknorris-io](https://www.npmjs.com/package/chucknorris-io)

