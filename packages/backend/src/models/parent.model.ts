import mongoose from 'mongoose';

export interface Parent extends mongoose.Document {
  name: String;
  password: String;
  color: String;
}

const parentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  color: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export const parentModel = mongoose.model<Parent>('parent', parentSchema);
