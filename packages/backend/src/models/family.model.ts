import mongoose from 'mongoose';

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