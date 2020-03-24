import { Document, Schema, model } from 'mongoose';

export interface Parent extends Document {
  name: string;
  password: string;
  color: string;
}

const ParentSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    unique: true
  },
  color: {
    type: Schema.Types.String,
    required: true
  },
  password: {
    type: Schema.Types.String,
    required: true
  }
});

export const ParentModel = model<Parent>('parent', ParentSchema);
