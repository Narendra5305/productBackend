const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    title:{type:String , require:true},
    desc:{type:String , require:true},
    
})


const ProductModel = mongoose.model("productdata" ,ProductSchema);

module.exports ={ProductModel};