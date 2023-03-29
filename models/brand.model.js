const { default: mongoose } = require("mongoose");

const brandSchema = new mongoose.Schema(
    {
        brandName: {type: String, unique: true},
        link: String
    },
    {collection: 'Brand'}
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
