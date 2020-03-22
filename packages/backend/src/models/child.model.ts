
import mongoose from 'mongoose';

export interface Child extends mongoose.Document {
  name: String;
  birthdate:Date;
  gender:Boolean;
  image:String;
  color:String;
  password:String;
}

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  birthdate:{
    type:Date
  },
  gender:{
    type:Boolean
  },
  image:{
    type:String
  },
  color:{
    type:String,
    required:true
  },
  password: {
    type: String,
    required: true,
  }
});

function instanceOfChild(object: any): object is Child {
  return 'gender' in object;
}

export{instanceOfChild}


export const childModel = mongoose.model<Child>('child', childSchema);
