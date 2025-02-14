import UserModel from "../models/user.model.js";
import createUser from "../services/user.service.js";
import {validationResult} from "express-validator";

export const registerUser= async (req, res, next) => {
    const errors= validationResult(req);
       

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {fullName, email, password} = req.body;

    const hashPassword= await UserModel.hashPassword(password);

    const user = await createUser({
        fullName:{
            firstName:fullName.firstName,
            lastName:fullName.lastName,
        },
        email,
        password:hashPassword
    }); 

    const token= user.genrateAuthToken();

    res.status(200).json({token, user});
}

export const loginUser= async (req, res, next) => {

    const errors= validationResult(req);
       
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;

    const user= await UserModel.findOne({email}).select('+password');
    if(!user){
        return res.status(404).json({message: 'Invalid email or password'});
    }

    const isMatch= await user.camparePassword(password);

    if(!isMatch){
        return res.status(404).json({message: 'Invalid email or password'});
    }

    const token= user.genrateAuthToken();

    res.status(200).json({token, user});
}
