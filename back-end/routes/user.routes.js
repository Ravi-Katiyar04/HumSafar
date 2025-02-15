import express from 'express';
const router= express.Router();
import { body } from 'express-validator';
import {registerUser, loginUser, getUserProfile, logoutUser} from '../controllers/user.controller.js';
import {authUser} from '../middlewares/auth.middleware.js';

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({min: 3}).withMessage('First name at least 3 character long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 character long'),
], registerUser);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 character long')

], loginUser);

router.get('/profile',authUser, getUserProfile);
router.get('/logout',authUser, logoutUser);

export default router;