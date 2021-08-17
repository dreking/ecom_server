const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const orderRoutes = require('./order');

router.use('/auth', authRoutes);

router.use('/orders', orderRoutes);

module.exports = router;
