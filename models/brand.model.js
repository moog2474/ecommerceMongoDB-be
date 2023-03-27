const { default: mongoose } = require("mongoose");

const brandSchema = new mongoose.Schema(
    {
        brandName: { type: String, unique: true },

    },
    { collection: 'Brand' }
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
