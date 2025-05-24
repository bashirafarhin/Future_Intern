import Razorpay from 'razorpay';
import Payment from '../database/models/payment.model.js';
import { ErrorHandler } from '../utils/errorHandler.js';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const processPayment = async (req, res, next) => {
  const { amount, email, phoneNo } = req.body;
  const options = {
    amount: amount,
    currency: 'INR',
    notes:{
      email:email,
      contact: phoneNo,
    }
  };
  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json({
      id: order.id,
      amount: order.amount,
      notes: order.notes,
    });
  } catch (error) {
    return next(new ErrorHandler('Payment Failed', 500));
  }
};

// Verify Payment
export const verifyPayment = async (req, res, next) => {
  const { id, order_id } = req.body;
  try {
    const payment = await razorpay.payments.fetch(id);
    if (payment.order_id === order_id && payment.status === 'captured') {
      const data = {
        txnId: payment.id,
        orderId: payment.order_id,
        txnAmount: payment.amount/100, 
        bankName:payment.bank,
        paymentMode:payment.method,
        refundAmt:payment.amount_refunded,
        txnDate:payment.created_at
      };
      const paymentsave=Payment.create(data);
      paymentsave.then(()=>
       console.log("Successful")
      ).catch((error)=>{
        console.log(error)
      })
      res.status(200).json({
        id:payment.id,
        order_id:payment.order_id,
        status:"success",
      });
    } else {
      return next(new ErrorHandler('Payment Verification Failed', 400));
    }
  } catch (error) {
    return next(new ErrorHandler('Payment Verification Failed', 500));
  }
};


export const getPaymentStatus = async (req, res, next) => {
  const payment = await Payment.findOne({ orderId: req.params.id });
  if (!payment) {
    return next(new ErrorHandler('Payment Details Not Found', 404));
  }
  const txn = {
    id: payment.orderId,
    status: 'captured',
  };
  res.status(200).json({
    success: true,
    txn,
  });
};
