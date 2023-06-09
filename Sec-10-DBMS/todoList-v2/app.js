//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todolistdb", {useNewUrlParser: true});

const itemSchema = {
    itemName: String
}

const Item = mongoose.model("Item", itemSchema)

const item1 = new Item({
  name: "Bundi phaadni hai"
})

const item2 = new Item({
  name: "Ek aur bundi phaadni hai"
})

const item3 = new Item({
  name: "Phir se ek aur bundi phadni hai"
})

const defaultItems = [item1, item2, item3]

Item.insertMany(defaultItems, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully inserted many items in the array")
  }
})

const workItems = [];

app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
