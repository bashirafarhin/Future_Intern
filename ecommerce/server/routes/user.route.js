import express from 'express'
import { registerUser, loginUser, logoutUser, getUserDetails, forgotPassword, resetPassword, updatePassword, updateProfile } from '../controllers/user.controller.js';
import { isAuthenticatedUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser);
router.get('/logout',logoutUser);
router.get('/me',isAuthenticatedUser,getUserDetails);
router.post('/password/forgot',forgotPassword);
router.put('/password/reset/:token',resetPassword); 
router.put('/password/update',isAuthenticatedUser, updatePassword);
router.put('/me/update',isAuthenticatedUser, updateProfile);

export default router;