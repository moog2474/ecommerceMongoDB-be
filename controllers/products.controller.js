const Products = require("../models/products.model");

exports.getAll = async (req, res) =>{
  const result = await Products.find({});

  if(result){
    res.status(200).send({
        status: true,
        result
    });
    return
  } else{
    res.status(500).send({
        status: false,
        message: "Products not found"
    });
  } return
};

exports.getOne = async(req, res) =>{
    const {_id} = req.params;

    const result = await Products.find({_id});

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

exports.createProduct = async(req, res) =>{
   try{
     const result = await Products.create(req.body)
     res.json({status: false, result})
   } catch (err){
    res.json({status: false, message: err})
   }


}


exports.updateProduct = async (req,res)=>{
    const {_id} = req.params
    const result = await Products.findByIdAndUpdate({_id})

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

exports.deleteProduct = async (req, res)=>{
    const {_id} = req.params
  
    const result = await Products.findByIdAndDelete({ _id });
   
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