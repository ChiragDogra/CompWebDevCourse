const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const cty = req.body.city;
  console.log(req.body)
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +  cty +  "&appid=93927334f588a3bf070599a842c2ebc6";
    https.get(url, (response) => {
      response.on("data", (data) => {
        const weatherData = JSON.parse(data);
        const temprature = Math.round(
          ((weatherData.main.temp - 273) * 10) / 10
        );
        const whetherDesc = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

        res.write(
          "<h1> The weather in " + cty + " is currently " + whetherDesc + " and the Temparature is " + temprature + " degrees celcius </h1>"
        );
        res.write("<img src =" + imageUrl + ">");
        res.send();
      });
    });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
