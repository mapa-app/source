
import { familyModel, Family } from '../models/family.model';
import { diaryModel } from '../models/diary.model';
import { instanceOfChild } from '../models/child.model';
import { resolveUser } from './user.resolver';

export const diaryResolver = {
  Query: {
    diary: async (p, { userID }, context, info) => {
      const user = await resolveUser(userID)
      var family: Family = null

      if (instanceOfChild(user)) {
        family = await familyModel.findOne({ children: user.id })
      } else {
        family = await familyModel.findOne({ parents: user.id })
      }

      const diary = await diaryModel.findOne({ family: family });
      return diary
    }
  }
}