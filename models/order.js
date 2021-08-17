const { Types, model, Schema } = require('mongoose');

const OrderSchema = new Schema(
    {
        userid: { type: Types.ObjectId, required: true, ref: 'User' },
        products: [
            {
                id: { type: Number, required: true },
                name: { type: String, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                brand: { type: String, required: true },
                quantity: { type: Number, required: true },
            },
        ],
        total: { type: Number, required: true },
    },
    { timestamps: true }
);

const Order = model('Order', OrderSchema);

module.exports = Order;
