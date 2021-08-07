const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app

const app = express();

// connect to mongodb
const dbURI = "mongodb://localhost:27017";

// connect with db
mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then((result) => {
    console.log("connected with DB");
  })
  .catch((err) => {
    console.log(err);
  });

// register view engine
app.set("views engine", "ejs");

// listen for request
app.listen(3000);

// middleware & static files

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { title: "About" });
});

// blogs routes

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index.ejs", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create.ejs", { title: "Create a new Blog" });
});

// 404 page

app.use((req, res) => {
  // res.sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404.ejs", { title: "404" });
});
