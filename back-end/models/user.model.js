import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, 'First name must be of length minimum 3'],
    },
    lastName: {
      type: String,
      minlength: [3, 'First name must be of length minimum 3'],
    },
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Email must be minimum 5 charcters'],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  soketId: {
    type: String,
  },
})


userSchema.methods.genrateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
}

userSchema.methods.camparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
