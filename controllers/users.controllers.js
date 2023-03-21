const Users = require("../models/users.model");


exports.getAll = async (req, res) =>{
    try{
        const result = await Users.find({})
        res.json({ status: false, result})

    } catch(err){
        res.json({ status: false, message: err});
    }
};

exports.getOne = async(req, res) =>{
    const {_id} = req.params;

    try{
        const result = await Users.findById({_id});
        res.json({status: false, result});
    }
    catch(err){
        res.json({status: false, message: err});
    }
}

exports.createUser = async (req, res) => {
    try{
        const result = await Users.create(req.body);
        res.json({status: false, result});
    }
    catch (err) {
        res.json({status: false, message: err});
    }
};

exports.updateUser = async (req,res)=>{
    const {_id} = req.params
    try{
        const result = await Users.findByIdAndUpdate({_id}, req.body);
        res.json({status: false, result});
    }
    catch (err) {
        res.json({status: false, message: err});
    }
}

exports.deleteUser = async (req, res)=>{
    const {_id} = req.params
    try{
        const result = await Users.findByIdAndDelete({ _id });
        res.json({status: false, result});
    }
    catch (err) {
        res.json({status: false, message: err});
    }
}