//jshint esversion:6
const express = require("express");

const app= express();
const users = require("./assets/asset");


app.get("/", function(req,res){
    console.log(users.users.length)
   console.log(users.users)
   var userData=JSON.stringify(users.users).split('[')[1].split(']')[0];
    res.send(users.users);
});
app.listen(3001, function(){
    console.log("App runing in port 3001")
});