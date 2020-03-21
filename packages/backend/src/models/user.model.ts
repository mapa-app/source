import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

export interface User extends mongoose.Document {
  name: any;
  password: any;
}

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

userSchema.pre<User>('save', function(next) {
  const self = this;
  const hashedPassword = bcrypt.hashSync(self.password, 12);
  this.password = hashedPassword;
  next();
});

export const userModel = mongoose.model<User>('user', userSchema);
