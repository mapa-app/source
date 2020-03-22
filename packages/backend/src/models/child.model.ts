import mongoose from 'mongoose';

export interface Child extends mongoose.Document {
  name: String;
  birthdate: Date;
  gender: String;
  image: String;
  color: String;
  password: String;
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
    type: String
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
