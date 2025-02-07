const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name:{type:String , require:true},
    email:{type:String , require:true},
    age:{type:String , require:true},
    pass:{type:String , require:true}
})


const UserModel = mongoose.model("userData" ,UserSchema);

module.exports ={UserModel};