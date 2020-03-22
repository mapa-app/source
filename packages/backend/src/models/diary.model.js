import mongoose from 'mongoose';

import {userModel} from './user.model'
import {diaryEntryModel} from './diaryentry.model'

// export interface Diary extends mongoose.Document {
//   user: any;
//   diaryEntries: any;
// }

const diarySchema = new mongoose.Schema({
  user: {
    type: userModel.schema,
    required: true
  },
  diaryEntries:{
    type: [diaryEntryModel.schema]
  }
});



export const diaryModel = mongoose.model('diary', diarySchema);
