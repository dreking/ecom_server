const Order = require('../models/order');

exports.postPlaceOrder = async (req, res) => {
    const { products } = req.body;
    const { id } = req.user;

    let total = 0;
    products.forEach(({ price, quantity }) => {
        total += price * quantity;
    });

    const order = await Order.create({
        userid: id,
        products: products,
        total: total,
    });

    return res.status(201).json({
        status: true,
        message: 'Order placed',
        data: order,
    });
};

exports.getAllOrders = async (req, res) => {
    const { id } = req.user;

    const orders = await Order.find({ userid: id })
        .populate('userid', '-password')
        .sort({ createdAt: -1 });

    return res.status(200).json({
        status: true,
        message: 'Orders found',
        orders: orders,
    });
};
