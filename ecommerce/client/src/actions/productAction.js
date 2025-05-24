import axios from "axios";
import {
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    SLIDER_PRODUCTS_REQUEST,
    SLIDER_PRODUCTS_SUCCESS,
    SLIDER_PRODUCTS_FAIL,
} from "../constants/productConstants";

const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
};
// Get All Products --- Filter/Search/Sort
export const getProducts =
    (keyword = "", category, price = [0, 200000], ratings = 0, currentPage = 1) => async (dispatch) => {
        try {
            dispatch({ type: ALL_PRODUCTS_REQUEST });
            let url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
            if (category) {
               url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
            }
            const res = await axios.get(url,config);
            dispatch({
                type: ALL_PRODUCTS_SUCCESS,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: ALL_PRODUCTS_FAIL,
                payload: error.response.data.message,
            });
        }
    };

// Get All Products Of Same Category
export const getSimilarProducts = (category) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/products?category=${category}`,config);
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Product Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/product/${id}`,config);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// New/Update Review
export const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_REVIEW_REQUEST });
        const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/v1/review`, reviewData, config);
        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: res.data.success,
        });
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Get All Products ---PRODUCT SLIDER
export const getSliderProducts = () => async (dispatch) => {
    try {
        dispatch({ type: SLIDER_PRODUCTS_REQUEST });
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/products/all`, config);
        dispatch({
            type: SLIDER_PRODUCTS_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: SLIDER_PRODUCTS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}