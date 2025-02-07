const express = require("express");

const ProductRouter = express.Router();

const { getProduct, addProduct, updateProduct ,deleteProduct} = require("../controller/product.controller")


ProductRouter.get("/" , getProduct)

ProductRouter.post("/" ,addProduct)

ProductRouter.patch("/:id", updateProduct)

ProductRouter.delete("/:id" , deleteProduct)





module.exports={ProductRouter}