import express from 'express'
import { getAllProducts, getProductDetails, createProductReview, getProducts } from '../controllers/product.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/products',getAllProducts);
router.get('/products/all',getProducts);
router.get('/product/:id',getProductDetails);
router.put('/review',isAuthenticatedUser, createProductReview);

export default router;