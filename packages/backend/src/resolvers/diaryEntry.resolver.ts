import { childModel ,Child,instanceOfChild} from '../models/child.model';
import { familyModel,Family } from '../models/family.model';
import { diaryModel,Diary } from '../models/diary.model';
import { resolveUser } from './user.resolver';
import { diaryEntryModel,DiaryEntry } from '../models/diaryentry.model';
import { Parent } from 'src/models/parent.model';
export const diaryEntryResolver = {
    Mutation: {
        addDiaryEntry: async (parent, { id, entry }, context, info) => {
            const user = await resolveUser(id)
            var family:Family = null

            if (instanceOfChild(user)){
               family = await familyModel.findOne({children:user})
            }else{
                family = await familyModel.findOne({parents:user})
            }

            const diary:Diary = await diaryModel.findOne({family:family})
            console.log(diary)



     
            const diaEntry = await diaryEntryModel.create({
                text: entry.text,
                date: entry.date,
                image:entry.image,
                parents:entry.parents,
                children:entry.children})

                console.log(diary)
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