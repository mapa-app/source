import { Document, Schema, model } from 'mongoose';

export interface Child extends Document {
  name: string;
  birthdate: Date;
  gender: 'FEMALE' | 'MALE';
  color: string;
  image?: string;
}

const ChildSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  birthdate: {
    type: Schema.Types.Date,
    required: true
  },
  gender: {
    type: Schema.Types.String,
    enum: ['FEMALE', 'MALE'],
    required: true
  },
  color: {
    type: Schema.Types.String,
    required: true
  },
  image: {
    type: Schema.Types.String
  }
});

export const ChildModel = model<Child>('child', ChildSchema);
