import { Document, Schema, model } from 'mongoose';

export interface DiaryEntry extends Document {
  text: string;
  date: Date;
  image: string;
  children: string[];
  parents: string[];
}

const DiaryEntrySchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true
  },
  date: {
    type: Schema.Types.Date,
    required: true
  },
  text: {
    type: Schema.Types.String
  },
  image: {
    type: Schema.Types.String
  },
  parents: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  children: {
    type: [Schema.Types.ObjectId],
    required: true
  }
});

export const DiaryEntryModel = model<DiaryEntry>('diaryEntry', DiaryEntrySchema);
