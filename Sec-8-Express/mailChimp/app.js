const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const https = require('https');

const app = express();
app.use(express.static("public")) //Whatever goes into the argument is going to be a static folder
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/signup.html');
})

app.post('/', (req, res)=>{
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    var data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/97b32c06be";

    const options = {
        method: "POST",
        auth: "dograchirag:c4acdaeea86feb66ac8be027f9d026ae-us21"
    }

    const request = https.request(url, options, (response)=>{
        if(response.statusCode === 200) {
            res.send("Successfully subscribed!")
        }
        else{
            res.send("Oops! Something went wrong")
        }
        response.on("data", (data)=>{
            console.log(JSON.parse(data))
        })
    } )

    request.write(jsonData);
    request.end();
    
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})

// API key
// c4acdaeea86feb66ac8be027f9d026ae-us21

// LIST ID
// 97b32c06be