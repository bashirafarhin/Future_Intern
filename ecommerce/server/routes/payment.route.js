import express from 'express'
import { processPayment, verifyPayment, getPaymentStatus } from '../controllers/payment.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/payment/process',isAuthenticatedUser,processPayment);
router.post('/callback',isAuthenticatedUser,verifyPayment);
router.get('/payment/status/:id',isAuthenticatedUser,getPaymentStatus);

export default router;