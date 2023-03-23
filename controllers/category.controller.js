const Category = require("../models/category.model");

exports.getAll = async (req, res) =>{
  const result = await Category.find({});

  if(result){
    res.status(200).send({
        status: true,
        result
    });
    return
  } else{
    res.status(500).send({
        status: false,
        message: "Category not found"
    });
  } return
};

exports.getOne = async(req, res) =>{
    const {_id} = req.params;

    const result = await Category.find({_id});

    if(result){
      res.status(200).send({
          status: true,
          result
      });
      return
    } else{
      res.status(500).send({
          status: false,
          message: "Product not found"
      });
    } return
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
    const result = await Category.findByIdAndUpdate({_id})

    if(result){
        res.status(200).send({
            status: true,
            result
        });
        return
    } else{
        res.status(500).send({
            status: false,
            message: "Product not found"
        })
    } return
}

exports.deleteCategory = async (req, res)=>{
    const {_id} = req.params
  
    const result = await Category.findByIdAndDelete({ _id });
   
    if(result){
        res.status(200).send({
            status: true,
            result
        });
        return
    } else{
        res.status(500).send({
            status: false,
            message: "Product id not found"
        })
    } return

}