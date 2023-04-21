const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// extended : true will allow us to post nested objects
app.use(bodyParser.urlencoded({extended:true})); //Url encoded is used to grab the information that we get from html form

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html"); //dirname will give the current file location
})

app.post("/", (req, res)=>{

    let ans;
    let sign = req.body.sign;
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    if(sign == '+'){
        ans = num1 + num2;
    }
    else if(sign == '-') ans = num1-num2;
    else if(sign == '*') ans = num1*num2;
    else if(sign == '/') ans = num1/num2;
    else res.send("Please put appropritate sign");

    res.send("Your answer is " + " " + ans.toString()); //dirname will give the current file location
})


app.listen(3000, ()=>{
    console.log("App is listening on port 3000");
})