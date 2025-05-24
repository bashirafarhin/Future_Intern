import { asyncErrorHandler } from '../middlewares/asyncErrorHandler.middleware.js';
import Order from '../database/models/order.model.js';
import { ErrorHandler } from '../utils/errorHandler.js';
import { sendEmail } from '../controllers/email.controller.js'

// Create New Order
export const newOrder = asyncErrorHandler(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        totalPrice,
    } = req.body;
    const orderExist = await Order.findOne({ paymentInfo });
    if (orderExist) {
        return next(new ErrorHandler("Order Already Placed", 400));
    }
    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });
    await sendEmail({
        email: req.user.email,
        type: "order_confirmation",
        data: {
            name: req.user.name,
            shippingInfo,
            orderItems,
            totalPrice,
            oid: order._id,
        }
    });
    res.status(201).json({
        success: true,
        order,
    });
});

// Get Single Order Details
export const getSingleOrderDetails = asyncErrorHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate("user", "name email");
    if (!order) {
        return next(new ErrorHandler("Order Not Found", 404));
    }
    res.status(200).json({
        success: true,
        order,
    });
});


// Get Logged In User Orders
export const myOrders = asyncErrorHandler(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });
    if (!orders) {
        return next(new ErrorHandler("Order Not Found", 404));
    }
    res.status(200).json({
        success: true,
        orders,
    });
});