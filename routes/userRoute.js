const express = require("express");

const UserRouter = express.Router();

const {SignUpUser ,SignInUser} = require("../controller/user.controller")


UserRouter.post("/signup" , SignUpUser)


UserRouter.post("/signin" , SignInUser)



module.exports={UserRouter}