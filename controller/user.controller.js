
const {UserModel} =require("../model/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const SignUpUser =async (req,res)=>{
    const {name ,email, age,pass} = req.body;
    try {
        bcrypt.hash(pass, 5, async(err, hash)=> {
            if (err){
                res.status(500).json({"msg":"there has been an error" ,err})
            }else{
                await UserModel.create({
                    name ,
                    email, 
                    age,
                    pass:hash
                });
                res.send("Sign Up Successfull")
            }
        });
        
    }catch (error){
        res.send("there has been an error",error)
    }
}

const SignInUser = async (req,res)=>{
    const {email, pass} = req.body;
    try {
        const mathcUser = await UserModel.findOne({email:email})
        if (mathcUser){
            bcrypt.compare(pass, mathcUser.pass, async(err, result)=> {
                if (err){
                    res.status(500).json({"msg":"there has been an error" ,err})
                }
                const token =await jwt.sign({ emailID: email }, 'MASAI');
                res.status(200).json({"token":token})
                
            });
        }else{
            res.status(500).json({"msg":"user not found"})
        }
        
    } catch (error) {
       res.send("there has been an error",error)
    }
}

module.exports ={SignUpUser,SignInUser}

