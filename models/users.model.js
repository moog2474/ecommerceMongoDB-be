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
        userType: String,
        favoriteProduct: [String],
        lastLoginDate: {
            type: Date,
            default: Date.now
        },
        updatedDate:{
            type: Date
        }
    },
    {collection: 'clUsers'}
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
