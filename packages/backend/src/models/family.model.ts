import mongoose from 'mongoose';
import {userModel, User} from './user.model'

export interface Family extends mongoose.Document {
  name: String;
  members:[User]
}

const familySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members:{
    type:[userModel.schema]
  }
});



export const familyModel = mongoose.model<Family>('family', familySchema);