//jshint esversion:6;

const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>Hello</h1>")
})

app.get("/contact", (req, res)=>{
    res.send("<h1>Hello I'm Contact</h1>")
})

app.get("/about", (req, res)=>{
    res.send("<h1>My name is you daddy</h1>")
})

app.get("/chinu", (req, res)=>{
    res.send("<h1>Chinnu Singh</h1>")
})

app.get("/chinoos", (req, res)=>{
    res.send("<h1>Chinnu Singh Dogra</h1>")
})




app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
});