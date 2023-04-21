const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}))

const connectionString = "mongodb+srv://dograchirag:Chirag@cluster0.4cfeodq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const articleSchema = {
    title: String, 
    content: String 
}

const Article = mongoose.model("Article", articleSchema);



app.get("/", (req, res)=>{
    res.send("App is listening My friend")
})


app.get("/articles", (req, res)=>{
    Article.find()
        .then(foundArticles => {
            console.log(foundArticles);  
        })
        .catch(err => {
            console.log(err);
        });
})


app.listen(3000, ()=>{
    console.log("App is listening on port 3000")
})