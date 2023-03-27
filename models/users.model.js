const { default: mongoose, Schema } = require("mongoose");

const usersSchema = new mongoose.Schema(
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
        userType: { type: Schema.Types.Mixed, enum: ["Admin", "Customer"] },
        favoriteProduct: [String],
        lastLoginDate: {
            type: Date,
            default: Date.now
        },
        updatedDate: {
            type: Date
        }
    },
    { collection: 'Users' }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
