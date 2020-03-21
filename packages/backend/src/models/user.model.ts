import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import {roleModel} from './role.model'
import {familyModel} from './family.model'

export interface User extends mongoose.Document {
  type: any;
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
      type:roleModel.schema,
      required: true,
  },
  family:{
    type:familyModel.schema
  }
});


export const userModel = mongoose.model('user', userSchema);
