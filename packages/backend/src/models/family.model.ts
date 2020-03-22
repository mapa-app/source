import mongoose from 'mongoose';
import {parentModel,Parent} from './parent.model'
import {childModel,Child} from './child.model'
export interface Family extends mongoose.Document {
  name: String;
  children:[String];
  parents:[String];
}

const familySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  state:{
    type:String,
    required:true
  },
  children:{
    type:[String]
  },
  parents:{
    type:[String]
  }
});



export const familyModel = mongoose.model<Family>('family', familySchema);