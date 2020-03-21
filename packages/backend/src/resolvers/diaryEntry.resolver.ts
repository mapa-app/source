import { userModel } from '../models/user.model';
import { diaryModel } from '../models/diary.model';

export const diaryEntryResolver = {
    Mutation: {
        addDiaryEntry: async (parent, { id, entry }, context, info) => {
            const user = await userModel.findById({ _id: id }).exec();
            await diaryModel.create({ user: user, diaryEntries: [{ text: entry.text, date: entry.date }] });
            return true;
        }
    }
}