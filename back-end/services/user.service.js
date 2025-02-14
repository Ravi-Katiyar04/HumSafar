import UserModel from "../models/user.model.js";

const createUser= async ({
    fullName, email, password
}) => {
    if(!fullName|| !email ||  !password){
        throw new Error('All fields are required.')
    }
    
    const user= await UserModel.create({
        fullName:{
            firstName:fullName.firstName,
            lastName:fullName.lastName
        },
        email,
        password
    })

    return user;
}

export default createUser;
