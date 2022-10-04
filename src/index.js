require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors())
app.listen(port,()=>{
    console.log("escuchando puerto",port);
})
app.use("/productos", require("./routes/Productos-routes"));
app.get("/ping" , (req,res)=>{
    try {
        mongoose.connect(process.env.MONGODBCONNECT , (error)=>{
            if(error){
                res.status(500).json({
                    error:true,
                    message:error,
                })
            }
            res.status(200).send("OK");
        });
    } catch (error) {
        console.log("error:", error);
    }
})
