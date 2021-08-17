const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order');
const authenticate = require('../middlewares/auth');
const validations = require('../validations/order');

router.post(
    '/',
    authenticate,
    validations.checkPlaceOrder,
    validations.handleValidation,
    orderController.postPlaceOrder
);

router.get('/', authenticate, orderController.getAllOrders);

module.exports = router;
