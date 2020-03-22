import mongoose from 'mongoose';
import { Role, roleModel } from './role.model';

export interface User extends mongoose.Document {
  name: string;
  password: string;
  role: Role
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: roleModel.schema,
    required: true
  }
});


export const userModel = mongoose.model<User>('user', userSchema);
