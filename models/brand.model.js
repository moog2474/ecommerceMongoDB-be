const { default: mongoose } = require("mongoose");

const brandSchema = new mongoose.Schema(
    {
<<<<<<< HEAD
        brandName: {type: String, unique: true},
        link: String
    },
    {collection: 'Brand'}
=======
        brandName: { type: String, unique: true },

    },
    { collection: 'Brand' }
>>>>>>> 5091706254d82a4181ab61401d3b9fe940c20f34
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
