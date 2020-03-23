import mongoose from 'mongoose';

export interface Child extends mongoose.Document {
  name: string;
  birthdate: Date;
  gender: 'FEMALE' | 'MALE';
  image: string;
  color: string;
  password: string;
}

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  birthdate: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['FEMALE', 'MALE']
  },
  image: {
    type: String
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

export function instanceOfChild(object: any): object is Child {
  return 'gender' in object;
}

export const childModel = mongoose.model<Child>('child', childSchema);
