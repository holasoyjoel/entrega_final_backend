const {Schema , model} = require("mongoose");
const ProductosSchema = new Schema({
    id:{
        type: Number,
        required: ["El id del producto es requerido",true]
    },
    name:{
        type:String,
        required:["El nombre del producto es requerido",true]
    },
    price:{
        type:Number,
        required:["El precio del producto es requerido",true]
    },
    stock:{
        type:Number,
        required:["El stock del producto es requerido", true]
    },
    description:{
        type:String,
        required:["La descripcion del producto es requerido", true]
    }
})

module.exports = model("Producto" , ProductosSchema);