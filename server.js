//express connection
const express = require('express')
const app = express()

//mogoose connection
const mongoose = require('mongoose');

app.listen(9002,function check(error){
    if(error)
    console.log("Error...!");
    else
    console.log("Started Succesfully..!");
});