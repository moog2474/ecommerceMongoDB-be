const {default: mongoose} = require("mongoose");

const categorySchema = new mongoose.Schema (
    {
        categoryName: {type: String, unique: true},
        link: String
    },
    {collection: 'Category'}
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
