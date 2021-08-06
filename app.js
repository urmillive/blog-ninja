const express = require("express");
const morgan = require("morgan");

// express app

const app = express();

// register view engine
app.set("views engine", "ejs");

// listen for request
app.listen(3000);

// middleware & static files

app.use(express.static("public"));
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("new request made");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("in the next middleware");
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    //  {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render("index.ejs", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about.ejs", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create.ejs", { title: "Create a new Blog" });
});

// 404 page

app.use((req, res) => {
  // res.sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404.ejs", { title: "404" });
});
