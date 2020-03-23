import mongoose from 'mongoose';

export interface Family extends mongoose.Document {
  name: string;
  state: 'TOGETHER' | 'DIVORCED' | 'PATCHED' | 'SINGLE';
  children: string[];
  parents: string[];
}

const familySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  state: {
    type: String,
    enum: ['TOGETHER', 'DIVORCED', 'PATCHED', 'SINGLE'],
    required: true
  },
  children: {
    type: [String]
  },
  parents: {
    type: [String]
  }
});


export const familyModel = mongoose.model<Family>('family', familySchema);
