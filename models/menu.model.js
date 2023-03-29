const {default: mongoose, Schema} = require("mongoose");

const menuName = new mongoose.Schema (
    {
        menuName: {type: String, unique: true},
        type: {type: Schema.Types.Mixed, enum: ["front", "back"]},
        link: String
    },
    {collection: 'Menu'}
);

const Menu = mongoose.model("Menu", menuName);

module.exports = Menu;
