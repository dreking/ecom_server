const { validationResult, body } = require('express-validator');

exports.handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({
            status: false,
            message: 'Validation error',
            errors: errors.array(),
        });

    next();
};

exports.checkPlaceOrder = [
    body('products', 'Products are required')
        .notEmpty()
        .bail()
        .isArray()
        .withMessage('Must be an array'),
    body('products.*.id', 'Product id is required')
        .notEmpty()
        .bail()
        .isNumeric()
        .withMessage('Must be a numeric value')
        .bail()
        .toInt(),
    body('products.*.name', 'Product name is required')
        .notEmpty()
        .bail()
        .isString()
        .bail()
        .trim(),
    body('products.*.brand', 'Product brand is required')
        .notEmpty()
        .bail()
        .isString()
        .bail()
        .trim(),
    body('products.*.image', 'Product iamge is required')
        .notEmpty()
        .bail()
        .isString()
        .bail()
        .trim()
        .isURL()
        .withMessage('Must be a valid URL')
        .bail(),
    body('products.*.price', 'Product price is required')
        .notEmpty()
        .bail()
        .isNumeric()
        .withMessage('Must be a numeric value')
        .bail()
        .custom((value) => value > 0)
        .withMessage('Must be a positive number')
        .bail()
        .toFloat(),
    body('products.*.quantity', 'Product quantity is required')
        .notEmpty()
        .bail()
        .isInt()
        .withMessage('Must be an integer')
        .bail()
        .custom((value) => value > 0)
        .withMessage('Must be a positive number')
        .bail()
        .toInt(),
];
