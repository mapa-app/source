
import { userModel } from '../models/user.model';
import { diaryModel } from '../models/diary.model';


export const diaryResolver = {
    Query: {
      diary: async (parent, { user }, context, info) => {
        const cuser = await userModel.findById({ _id: user.id }).exec();
        const diary = await diaryModel.findOne({ user: cuser });
        return diary
      }
    }
}