const express = require("express")
const app = require("./app")

require("./config/env")
app.listen(process.env.PORT,process.env.HOST,(err)=>{
    if(err){
        console.log("error in starting server");
    }else{
        console.log(`server starting successfully at http://${process.env.HOST}:${process.env.PORT}`)
    }
})