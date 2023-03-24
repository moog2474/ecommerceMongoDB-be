const {default: mongoose, Schema} = require("mongoose");

const orderSchema = new mongoose.Schema (
    {
        orderNumber: String,
        orderDate: Date,
        requiredDate: Date,
        shippedDate: Date,
        status: String,
        comments: String,
        customerNumber: {
            type: Schema.Types.ObjectId,
            ref: "Users"
        },
        orderDetails: [ {
            orderDate: Date,
            shippedDate: Date,
            quantity: Number,
            price: Number,
            productId: { type: Schema.Types.ObjectId, ref: "Products"}
        }]
    },
    {
        collection: 'Order'
}
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
