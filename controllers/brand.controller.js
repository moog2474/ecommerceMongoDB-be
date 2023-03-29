const Brand = require("../models/brand.model");

<<<<<<< HEAD
exports.getAll = async (req, res) =>{
    try{
        const result = await Brand.find({})
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
};

exports.getOne = async(req, res) =>{
    const {_id} = req.params;

    try{
        const result = await Brand.find({_id})
        res.json({status: true, result})
    } catch(err){
        res.json({status: true, message: err})
    }
}

exports.createBrand = async(req, res) =>{
    try{
        const result= await Brand.create(req.body)
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
=======
exports.getAll = async (req, res) => {
    try {
        const result = await Brand.find({})
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
    }
};

exports.getOne = async (req, res) => {
    const { _id } = req.params;

    try {
        const result = await Brand.find({ _id })
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: true, message: err })
    }
}

exports.createBrand = async (req, res) => {
    try {
        const result = await Brand.create(req.body)
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
>>>>>>> 5091706254d82a4181ab61401d3b9fe940c20f34
    }
}


<<<<<<< HEAD
exports.updateBrand = async (req,res)=>{
    const {_id} = req.params
    try {
        const result = await Brand.findByIdAndUpdate({_id}, req.body)
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
}

exports.deleteBrand = async (req, res)=>{
    const {_id} = req.params
  
try{
    const result = await Brand.findByIdAndDelete({_id})
    res.json({ status: true, result})
} catch(err){
    res.json({status: false, message: err})
}
=======
exports.updateBrand = async (req, res) => {
    const { _id } = req.params
    try {
        const result = await Brand.findByIdAndUpdate({ _id })
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
    }
}

exports.deleteBrand = async (req, res) => {
    const { _id } = req.params

    try {
        const result = await Brand.findByIdAndDelete({ _id })
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
    }
>>>>>>> 5091706254d82a4181ab61401d3b9fe940c20f34
}