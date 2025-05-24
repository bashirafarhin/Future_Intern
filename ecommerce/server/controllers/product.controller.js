import Product from "../database/models/product.model.js";
import { asyncErrorHandler } from "../middlewares/asyncErrorHandler.middleware.js";
import SearchFeatures from "../utils/searchFeatures.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get All Products
export const getAllProducts = asyncErrorHandler(async (req, res, next) => {
  const resultPerPage = 12;
  const productsCount = await Product.countDocuments();
  const searchFeature = new SearchFeatures(Product.find(), req.query)
    .search()
    .filter();
  let products = await searchFeature.query;
  let filteredProductsCount = products.length;
  searchFeature.pagination(resultPerPage);
  products = await searchFeature.query.clone();
  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get All Products ---Product Sliders
export const getProducts = asyncErrorHandler(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});

// Get Product Details
export const getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
};

// Create OR Update Reviews
export const createProductReview = asyncErrorHandler(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  const isReviewed = product.reviews.find(
    (review) => review.user.toString() === req.user._id.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  product.ratings = avg / product.reviews.length;
  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of Product
export const getProductReviews = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Reveiws
export const deleteReview = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );
  let avg = 0;
  reviews.forEach((rev) => {
    avg += rev.rating;
  });
  let ratings = 0;
  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }
  const numOfReviews = reviews.length;
  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings: Number(ratings),
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
  });
});
