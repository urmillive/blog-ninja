const express = require("express");

const port = 3000;
// express app

const app = express();

// register view engine
app.set("views engine", "ejs");

// listen for request
app.listen(port);

app.get("/", (req, res) => {
  const blogs = [
    //  {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index.ejs', { title: 'Home', blogs });
});
app.get("/about", (req, res) => {
  res.render("about.ejs",{title:'About'});
});

app.get('/blogs/create', (req, res) => {
  res.render('create.ejs',{title:'Create a new Blog'});
});

// 404 page

app.use((req, res) => {
  // res.sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404.ejs",{title:'404'});
});

