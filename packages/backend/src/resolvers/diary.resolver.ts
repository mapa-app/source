
import { familyModel, Family } from '../models/family.model';
import { diaryModel } from '../models/diary.model';
import { childModel, instanceOfChild } from '../models/child.model';
import { parentModel } from '../models/parent.model';
import { resolveUser } from './user.resolver';
export const diaryResolver = {
  Query: {
    diary: async (p, { id }, context, info) => {
      const user = await resolveUser(id)
      var family: Family = null

      if (instanceOfChild(user)) {
        family = await familyModel.findOne({ children: user })
      } else {
        family = await familyModel.findOne({ parents: user })
      }

      const diary = await diaryModel.findOne({ family: family });
      return diary
    }
  }
}