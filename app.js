const express = require("express");

const port = 3000;
// express app

const app = express();

// register view engine
app.set("views engine", "ejs");

// listen for request
app.listen(port);

app.get("/", (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects

app.get("/aboutme", (req, res) => {
  res.redirect("/about");
});

// 404 page

app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});
