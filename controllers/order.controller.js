const Order = require("../models/order.model");

exports.getAll = async (req, res) =>{
    try{
        const result = await Order.find({}).populate([
            {path: "customerId", select: "userName"},
            {path: "orderDetails.productId", select: "_id"}
        ])
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
};

exports.getOne = async(req, res) =>{
    const {_id} = req.params;

    try{
        const result = await Order.find({_id}).populate([
            {path: "customerId", select: "userName"},
            {path: "orderDetails.productId", select: "_id"}])
            
        res.json({status: true, result})
    } catch(err){
        res.json({status: true, message: err})
    }
}

exports.createOrder = async(req, res) =>{
    try{
        const result= await Order.create(req.body)
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
}


exports.updateOrder = async (req,res)=>{
    const {_id} = req.params
    try {
        const result = await Order.findByIdAndUpdate({_id})
        res.json({status: true, result})
    } catch(err){
        res.json({status: false, message: err})
    }
}

exports.deleteOrder = async (req, res)=>{
    const {_id} = req.params
  
try{
    const result = await Order.findByIdAndDelete({_id})
    res.json({ status: true, result})
} catch(err){
    res.json({status: false, message: err})
}
}