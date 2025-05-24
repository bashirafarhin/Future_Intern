import axios from "axios";
import { CLEAR_ERRORS, MY_ORDERS_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS, NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, PAYMENT_STATUS_FAIL, PAYMENT_STATUS_REQUEST, PAYMENT_STATUS_SUCCESS } from "../constants/orderConstants";

const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
};
// New Order
export const newOrder = (order) => async (dispatch) => {
    try {
        dispatch({ type: NEW_ORDER_REQUEST });
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/order/new`, order, config);
        dispatch({
            type: NEW_ORDER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: NEW_ORDER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get User Orders
export const myOrders = () => async (dispatch) => {
    try {
        dispatch({ type: MY_ORDERS_REQUEST });
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/orders/me`,config);
        dispatch({
            type: MY_ORDERS_SUCCESS,
            payload: data.orders,
        })
    } catch (error) {
        dispatch({
            type: MY_ORDERS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/order/${id}`,config);
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data.order,
        })
    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Payment Status
export const getPaymentStatus = (id) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_STATUS_REQUEST });
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/payment/status/${id}`,config);
        dispatch({
            type: PAYMENT_STATUS_SUCCESS,
            payload: data.txn,
        })
    } catch (error) {
        dispatch({
            type: PAYMENT_STATUS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}