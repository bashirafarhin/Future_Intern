import express from 'express'
import { newOrder, getSingleOrderDetails, myOrders } from '../controllers/order.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/order/new',isAuthenticatedUser, newOrder);
router.get('/order/:id',isAuthenticatedUser, getSingleOrderDetails);
router.get('/orders/me',isAuthenticatedUser, myOrders);

export default router;