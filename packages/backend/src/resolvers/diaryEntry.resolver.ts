import { childModel ,Child,instanceOfChild} from '../models/child.model';
import { familyModel,Family } from '../models/family.model';
import { diaryModel,Diary } from '../models/diary.model';
import { resolveUser } from './user.resolver';
import { diaryEntryModel,DiaryEntry } from '../models/diaryentry.model';
export const diaryEntryResolver = {
    Mutation: {
        addDiaryEntry: async (parent, { userID, entry }, context, info) => {
            const user = await resolveUser(userID)
            var family:Family = null
            console.log(user)
            if (instanceOfChild(user)){
               family = await familyModel.findOne({children:user.id})
            }else{
                family = await familyModel.findOne({parents:user.id})
            }

            const diary:Diary = await diaryModel.findOne({family:family})
           
            const diaEntry = await diaryEntryModel.create({
                text: entry.text,
                date: entry.date,
                image:entry.image,
                parents:entry.parents,
                children:entry.children})

            if(diary == null){
                await diaryModel.create({ family: family, diaryEntries: [
                    diaEntry
                ]});
            }else{
                console.log("add new")
                diary.diaryEntries.push(diaEntry)
                diary.save()
            }
            
            
            return true;
        }
    }
}