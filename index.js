const express = require("express");

const { default: mongoose } = require("mongoose");

const {toConnectDb} = require("./config")

const {MainRouter} = require("./routes/index")
const cors = require("cors");

const app = express();

app.use(express.json())

app.use(cors({
    origin:'https://productbackend-ogse.onrender.com/',
    methods:['GET','POST' ,'PUT','DELETE'],
    credentials:true,
}))


app.get('/',(req,res)=>{
    res.send("this is home page")
})

app.use("/api" , MainRouter)



app.listen(10000,async()=>{
    toConnectDb()
    console.log("Server is running at http://localhost:10000/")
})