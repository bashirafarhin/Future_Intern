import jwt from 'jsonwebtoken';
import User from '../database/models/user.model.js';
import { ErrorHandler } from '../utils/errorHandler.js';
import { asyncErrorHandler } from './asyncErrorHandler.middleware.js';

export const isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return next(new ErrorHandler("Please Login to Access", 401))
    }
    const decoded = jwt.verify(token, 'secret');
    const user = await User.findById(decoded.id);
    if (!user) {
        return next(new ErrorHandler("Please Login to Access", 401))
    }
    req.user = user;
    next();
});

export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed`, 403));
        }
        next();
    }
}