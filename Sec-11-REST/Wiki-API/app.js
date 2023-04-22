const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);



//////////////////////////////////////////////  Connecting to database and article schema  /////////////////////////////////////////////////

const connectionString =
  "mongodb+srv://dograchirag:Chirag@cluster0.4cfeodq.mongodb.net/wikiDB";

mongoose.connect(connectionString);

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

app.get("/", (req, res) => {
  res.send("App is listening My friend");
});




/////////////////////////////////////////   Route Targeting all the articles  //////////////////////////////////////////////////

app
  .route("/articles")

  .get((req, res) => {
    Article.find()
      .then((foundArticles) => {
        console.log(foundArticles);
        res.send(foundArticles);
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save((err) => {
      if (!err) {
        res.send("Data recieved successfully");
      } else {
        res.send("Oops some error occured");
      }
    });
  })

  .delete((req, res) => {
    Article.deleteMany().then((err) => {
      if (!err) {
        res.send("Successfully deleted all the articles");
      } else {
        res.send(err);
      }
    });
  });




  ////////////////////////////////////////////  Route targeting a specific article  //////////////////////////////////////////////////

  app
  .route("/articles/:articleTitle")

  .get((req, res)=>{
    Article.findOne({title: req.params.articleTitle})
      .then((foundArticles) => {
        console.log(foundArticles);
        res.send(foundArticles);
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .delete((req, res)=>{
    Article.deleteOne({title: req.params.articleTitle})
    .then(() => {
        console.log("Deleted Successfully");
        res.send("Deleted Successfully");
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .put((req, res)=>{
    Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content}
    ).then(()=>{
        res.send("Successfully updated");
    }).catch((err)=>{
        res.send(err);
    })
  })   
  
  .patch((req, res)=>{
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body}
    ).then(()=>{
        res.send("Successfully updated");
    }).catch((err)=>{
        res.send(err);
    })
  });




app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
