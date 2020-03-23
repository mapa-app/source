import mongoose from 'mongoose';
import {familyModel, Family} from './family.model'
import {diaryEntryModel, DiaryEntry} from './diaryentry.model'

export interface Diary extends mongoose.Document {
  family: Family;
  diaryEntries: DiaryEntry[];
}

const diarySchema = new mongoose.Schema({
  family: {
    type: familyModel.schema,
    required: true
  },
  diaryEntries:{
    type: [diaryEntryModel.schema]
  }
});



export const diaryModel = mongoose.model<Diary>('diary', diarySchema);
