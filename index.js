// server.js
// load the things we need
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
// index page
app.get("/", (req, res) => {
  res.send("Hello World!");
  //res.render('pages/index');
});

var students = {
  1: {
    name: "Ricardo",
    subjects: ["HTML", "JavaScript", "Python"]
  },
  2: {
    name: "Bryony",
    subjects: ["NodeJs", "Django", "Bootstrap"]
  },

  3: {
    name: "Ludeno",
    subjects: ["Java", "C++", "C#"]
  },

  4: {
    name: "Morayma",
    subjects: ["Haskell", "MySQL", "VB.Net"]
  }
};

app.get("/students/:id", (req, res) => {
  res.render("students", {
    name: students[req.params.id].name,
    id: req.params.id,
    subjects: students[req.params.id].subjects
  });
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
console.log(process.env.port);
