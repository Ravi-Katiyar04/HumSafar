import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import BlacklistToken from '../models/blacklistToken.model.js';

export const authUser= async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'Not authorized'});
    }

    const isblacklisted= await BlacklistToken.findOne({token:token});

    if(isblacklisted){
        return res.status(401).json({message: 'Not authorized'});
    }


    try {
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        const user= await UserModel.findById(decoded._id);
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        req.user= user;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Not authorized'});
    }
}