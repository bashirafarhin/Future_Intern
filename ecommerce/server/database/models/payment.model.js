import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    txnId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    txnAmount: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        // required: true
    },
    paymentMode: {
        type: String,
        required: true
    },
    refundAmt: {
        type: String,
        required: true
    },
    txnDate: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Payment", paymentSchema);