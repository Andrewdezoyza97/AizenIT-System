//express connection
const express = require('express')
const app = express()

//mongoose connection
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//Routes
var routes = require('./route/routes');
const cors = require('cors');
 
app.use(cors(
  {
    origin: "http://localhost:4200"
  }
 
));
 
app.listen(9002,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("Started server sucessfully\n")
});

//Established Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/erp_system",{useNewUrlParser: true,  useUnifiedTopology: true },
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to Database");
    }
    else
    {
        console.log("Successfully Connected to Database");
    }
});
app.use(express.json());
app.use(routes);
