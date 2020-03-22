import mongoose from 'mongoose';
import {parentModel,Parent} from './parent.model'
import {childModel,Child} from './child.model'
export interface Family extends mongoose.Document {
  name: String;
  children:[Child];
  parents:[Parent];
}

const familySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state:{
    type:String,
    required:true
  },
  children:{
    type:[childModel.schema]
  },
  parents:{
    type:[parentModel.schema]
  }
});



export const familyModel = mongoose.model<Family>('family', familySchema);