const {default: mongoose, Schema} = require("mongoose");

const productsSchema = new mongoose.Schema (
    {
        productName: String,
        price: Number,
        inStock: Number,
        discount: Number,
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: "Category"
        },
        description: String,
        thumbImage: String,
        createdUser: String,
        timestapms: true
    },
    {collection: 'Products'}
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
