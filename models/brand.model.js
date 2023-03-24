const {default: mongoose} = require("mongoose");

const brandSchema = new mongoose.Schema (
    {
        brandName: {type: String, unique: true},
        
        link: String
    },
    {collection: 'Category'}
);

const Category = mongoose.model("Category", brandSchema);

module.exports = Category;
