const Products = require("../models/products.model");

exports.getAll = async (req, res) =>{
    try{
        const result = await Products.find({}).populate([
            {path: "categoryId", select: "categoryName"},
            {path: "brandId", select: "brandName"},
            {path: "createdAdmin", select: "userName"}
        ])
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
};

exports.getOne = async(req, res) =>{
    const {_id} = req.params;

    try{
        const result = await Products.find({_id}).populate([
            {path: "categoryId", select: "categoryName"},
            {path: "brandId", select: "brandName"},
            {path: "createdAdmin", select: "userName"}
        ])
        res.json({status: true, result})
    } catch(err){
        res.json({status: true, message: err})
    }
}

exports.createProduct = async(req, res) =>{
    try{
        const result= await Products.create(req.body)
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
}


exports.updateProduct = async (req,res)=>{
    const {_id} = req.params
    try {
        const result = await Products.findByIdAndUpdate({_id}, req.body)
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
}

exports.deleteProduct = async (req, res)=>{
    const {_id} = req.params
  
try{
    const result = await Products.findByIdAndDelete({_id})
    res.json({ status: true, result})
} catch(err){
    res.json({status: false, message: err})
}
}