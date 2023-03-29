const {default: mongoose} = require("mongoose");

const menuName = new mongoose.Schema (
    {
        menuName: {type: String, unique: true},
        link: String
    },
    {collection: 'Menu'}
);

const Menu = mongoose.model("Menu", menuName);

module.exports = Menu;
