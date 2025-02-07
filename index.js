const express = require("express");

const { default: mongoose } = require("mongoose");

const {toConnectDb} = require("./config")

const {MainRouter} = require("./routes/index")

const app = express();

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("this is home page")
})

app.use("/api" , MainRouter)



app.listen(8080,async()=>{
    toConnectDb()
    console.log("Server is running at http://localhost:8080/")
})