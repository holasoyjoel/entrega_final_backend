const Producto = require("../models/Productos-model");

const getProductos = (req,res)=>{
    Producto.find({} , (error, prods)=>{
        if(error){
            console.log(error);
            return res.status(400).json({
                message:error,
                data: undefined,
                error: true
            })
        }
        res.status(200).json({
            message: prods.length,
            data: prods,
            error: false
        })
    })
}
const getProducto = (req,res)=>{
    const {id,name} = req.query;
    if(id){
        Producto.find({id:id}, (error,prod)=>{
            if(error){
                console.log(error);
                return res.status(400).json({
                    message:error,
                    data: undefined,
                    error: true
                })
            }
            return res.status(200).json({
                message: "Ok",
                data: prod,
                error: false
            })
        })
    }
   
    
    if(name){
        Producto.find({name:name}, (error,prod)=>{
            if(error){
                console.log(error);
                return res.status(400).json({
                    message:error,
                    data: undefined,
                    error: true
                })
            }
            res.status(200).json({
                message: "Ok",
                data: prod,
                error: false
            })
        })
    }

    if(!id && !name){
        return res.status(400).json({
            message: "Debes ingresar como parametro un ID o Name",
            data: undefined,
            error: true
        })
    }
    
}

const postProducto = (req,res)=>{
    const {id,name,price,stock,description} = req.body;
    let producto = new Producto({id,name,price,stock,description})
    producto.save((error,prod)=>{
        if(error){
            console.log(error);
            return res.status(400).json({
                message:error,
                data: undefined,
                error: true
            })
        }
        res.status(201).json({
            message: "Producto Creado",
            data: prod,
            error: false
        })
    })
}


const putProducto = (req,res)=>{
    const {name , price , stock , descripcion } = req.body;
    const {id} = req.params;
    
    Producto.findOneAndUpdate({id:id} , {name,price,stock,descripcion} , {new:true} , (error,prod)=>{
        if(error){
            console.log(error);
            return res.status(400).json({
                message:error,
                data: undefined,
                error: true
            })
        }
        res.status(200).json({
            message: "Producto Modificado",
            data: prod,
            error: false
        })
    })
}   
const deleteProducto = (req,res)=>{
    const {id} = req.params;
    Producto.findOneAndDelete({id:id} , {new:true} , (error,prod)=>{
        if(error){
            console.log(error);
            return res.status(400).json({
                message:error,
                data: undefined,
                error: true
            })
        }
        res.status(200).json({
            message: "Producto Eliminado",
            data: prod,
            error: false
        })
    })
}

module.exports = {
    getProducto,
    getProductos,
    postProducto,
    putProducto,
    deleteProducto
}