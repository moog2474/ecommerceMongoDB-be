const {default: mongoose, Schema} = require("mongoose");

const productsSchema = new mongoose.Schema (
    {
        productName: String,
        price: Number,
        inStock: Number,
        discount: Number,
        brandId:{
            type: Schema.Types.ObjectId,
            ref: "Brand"
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: "Category"
        },
        description: String,
        thumbImage: String,
        images: [String],
        createdAdmin: {
            type: Schema.Types.ObjectId,
            ref: "Users"
        }
        
    },
    {
        collection: 'Products',
        timestamps: true
}
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
