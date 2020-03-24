import { Document, Schema, model, Types } from 'mongoose';

export interface Family extends Document {
  state: 'TOGETHER' | 'DIVORCED' | 'PATCHED' | 'SINGLE';
  children: Types.ObjectId[];
  parents: Types.ObjectId[];
  diary: Types.ObjectId[];
}

const FamilySchema = new Schema({
  state: {
    type: Schema.Types.String,
    enum: ['TOGETHER', 'DIVORCED', 'PATCHED', 'SINGLE'],
    required: true
  },
  children: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  parents: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  diary: {
    type: [Schema.Types.ObjectId],
    required: true
  }
});

export const FamilyModel = model<Family>('family', FamilySchema);
