import mongoose from 'mongoose';


export interface DiaryEntry extends mongoose.Document {
  text: any;
  date: any;
}
const diaryEntrySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  date:{
    type: Date,
    required: true
  }
});


export const diaryEntryModel = mongoose.model('diaryEntry', diaryEntrySchema);
