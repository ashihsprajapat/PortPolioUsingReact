const express=require("express");
const app=express;
const port=8080;
app.listen(port,()=>{
    console.log("App is listening on port",port);
})
app.length("/",(req,res)=>{
    res.send("ok working")
})