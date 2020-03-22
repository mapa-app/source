import mongoose from 'mongoose';

export interface DiaryEntry extends mongoose.Document {
  text: String;
  date: Date;
  image:String;
  children:[String];
  parents:[String];

}
const diaryEntrySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  date:{
    type: Date,
    required: true
  },
  image:{
    type:String
  },
  children:{
    type:[String]
  },
  parents:{
    type:[String]
  }
});


export const diaryEntryModel = mongoose.model<DiaryEntry>('diaryEntry', diaryEntrySchema);
