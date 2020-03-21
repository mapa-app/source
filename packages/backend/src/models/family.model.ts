import mongoose from 'mongoose';


export interface Family extends mongoose.Document {
  name: any;
}

const familySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});



export const familyModel = mongoose.model('family', familySchema);