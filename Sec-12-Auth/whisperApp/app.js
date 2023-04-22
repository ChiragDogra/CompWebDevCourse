//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
const md5 = require("md5")

//////////////////   Setting up app  //////////////////////

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/////////////////////   Connecting to Atlas using Mongoose   ////////////////////////

const connectionString =
  "mongodb+srv://dograchirag:Chirag@cluster0.4cfeodq.mongodb.net/secretsDB";

mongoose.connect(connectionString);

////////////////////////  Creating User Schema   /////////////////////////

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema);

//////////////////  Creating Routes ///////////////////////

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const userEmail = req.body.username;
  const userPassword = md5(req.body.password);

  const newUser = new User({
    email: userEmail,
    password: userPassword,
  });

  newUser
    .save()
    .then(() => {
      res.render("secrets");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/login", (req, res) => {
  const email = req.body.username;
  const password = md5(req.body.password);

  User.findOne({ email: email })
    .then((foundUser) => {
      if (foundUser.password === password) {
        res.render("secrets");
      } else {
        res.send("Oops wrong password");
      }
    })
    .catch((err) => {
      res.send("User not found");
    });
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
