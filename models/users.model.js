const {default: mongoose} = require("mongoose");

const usersSchema = new mongoose.Schema (
    {
        firstName: String,
        lastName: String,
        userName: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            unique: true
        },
        userType: {
            type: String
        },
        favoriteProduct: {
            type: String
        },
        lastLoginDate: {
            type: Date(),
            default: Date.now
        },
        updatedDate:{
            type: Date()
        }
    },
    {collection: 'users'}
);

const users = mongoose.model("users", usersSchema);

module.exports = users;
