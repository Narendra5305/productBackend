const express = require("express");
const {UserRouter} = require("./userRoute")
const {auth} = require("../middleware/auth")
const {ProductRouter} = require("../routes/product")

const MainRouter = express.Router();

MainRouter.use("/user",UserRouter)

MainRouter.use("/product" ,auth, ProductRouter)

module.exports= {MainRouter}