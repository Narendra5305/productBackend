const { default: mongoose } = require('mongoose');

require('dotenv').config();

const toConnectDb =async ()=>{
    try {
        await mongoose.connect(process.env.DB_LINK)
        console.log("Db is connected")
    } catch (error) {
        console.log("there has been an error" , error)
    }
    
}

module.exports ={toConnectDb}