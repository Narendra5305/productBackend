const {ProductModel} = require("../model/product.model")



const getProduct =async (req , res)=>{
    try {
        const data = await ProductModel.find();
        res.status(200).json({"msg":"product data" ,data})
    } catch (error) {
        res.status(400).json({"msg":"there has been an error" ,error})
    }
}

const addProduct =async (req , res)=>{
    try {
        const newProduct = ProductModel(req.body);
        await newProduct.save();
        res.status(200).json({"msg":"product is added" ,newProduct})
    } catch (error) {
        res.status(400).json({"msg":"there has been an error" ,error})
    }
}

const updateProduct =async (req , res)=>{
    const id = req.params.id;
    try {
        await ProductModel.findByIdAndUpdate({_id:id} ,req.body)
        res.status(200).json({"msg":"product is updateded"})
    } catch (error) {
        res.status(400).json({"msgs":"there has been an error" ,error})
    }
}


const deleteProduct =async (req , res)=>{
    const id = req.params.id;
    try {
        await ProductModel.findByIdAndDelete({_id:id})
        res.status(200).json({"msg":"product is deleted"})
    } catch (error) {
        res.status(400).json({"msgs":"there has been an error" ,error})
    }
}



module.exports={ getProduct, addProduct, updateProduct ,deleteProduct}