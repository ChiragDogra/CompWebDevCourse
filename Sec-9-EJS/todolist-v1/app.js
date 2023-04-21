const express = require ('express')
const bodyParser = require('body-parser')

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))


var items = []

app.get("/", (req, res)=>{
    const today = new Date();
    const currDay = today.getDay();
    let day = ""

    switch(currDay){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: Day is out of bounds " + currDay)

    }

    res.render('list', {kindOfDay: day, newListItems: items})
})


app.post('/', (req, res)=>{
    const txt = req.body.newItem;
    if(txt != "" || txt != " "){
        items.push(txt)
        res.redirect("/")
    } 
    
})

app.listen(3000, ()=>{
    console.log("app is indeed listening on port 3000")
})
