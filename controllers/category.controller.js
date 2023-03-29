const Category = require("../models/category.model");

exports.getAll = async (req, res) =>{
    try{
        const result = await Category.find({})
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
};

exports.getOne = async(req, res) =>{
    const {_id} = req.params;

    try{
        const result = await Category.find({_id})
        res.json({status: true, result})
    } catch(err){
        res.json({status: true, message: err})
    }
}

exports.createCategory = async(req, res) =>{
    try{
        const result= await Category.create(req.body)
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
}


exports.updateCategory = async (req,res)=>{
    const {_id} = req.params
    try {
        const result = await Category.findByIdAndUpdate({_id}, req.body)
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
}

exports.deleteCategory = async (req, res)=>{
    const {_id} = req.params
  
try{
    const result = await Category.findByIdAndDelete({_id})
    res.json({ status: true, result})
} catch(err){
    res.json({status: false, message: err})
}
}