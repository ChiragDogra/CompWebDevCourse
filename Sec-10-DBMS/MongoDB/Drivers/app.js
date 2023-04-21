const express = require('express');
const {connectToDB, getDB} = require('./db');

const app = express();

//DB connection
let db;
connectToDB((err) =>{
    if(!err){
        app.listen(3000, ()=>{
            console.log("Listening on port 3000");
        })
        db = getDB();
    }
})


app.get('/books', (req, res)=>{

    let books = [];

    //get collection
    db.collection('books')
        .find()
        .sort({author: 1})
        .forEach(book => books.push(book))
        .then(() =>{
            res.status(200).json(books)
        })
        .catch(() =>{
            res.status(500).json({error: 'Could not fetch document'})
        })
})





