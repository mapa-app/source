import mongoose from 'mongoose';

export interface Child extends mongoose.Document {
  name: string;
  birthdate: Date;
  gender: 'FEMALE' | 'MALE';
  color: string;
  image?: string;
}

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['FEMALE', 'MALE'],
    required: true
  },
  color: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

export function instanceOfChild(object: any): object is Child {
  return 'gender' in object;
}

export const childModel = mongoose.model<Child>('child', childSchema);
