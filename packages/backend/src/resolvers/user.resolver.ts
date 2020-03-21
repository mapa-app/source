import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import { userModel } from '../models/user.model';
import { diaryModel } from '../models/diary.model';
import { roleModel } from '../models/role.model';
import { familyModel } from '../models/family.model'
import { diaryEntryModel } from '../models/diaryentry.model';
import { duplicateArgMessage } from 'graphql/validation/rules/UniqueArgumentNames';

export const userResolver = {
  Query: {
    user: async (parent, { id }, context, info) => {
      const user = await userModel.findById({ _id: id }).exec();
      return user;
    },
    diary: async (parent, { user }, context, info) => {
      const cuser = await userModel.findById({ _id: user.id }).exec();
      const diary = await diaryModel.findOne({ user: cuser });
      return diary
    }
  },
  Mutation: {
    createUser: async (parent, { name, password, role, family }, context, info) => {
      const cfamily = await familyModel.findOne({ name: family.name });
      if (cfamily == null) {
        const createdFamily = await familyModel.create({ name: family.name });
        const user = await userModel.create({ name, password, role, createdFamily });
        return user;
      } else {
        const user = await userModel.create({ name, password, role, cfamily });
        return user;
      }

    },
    addDiaryEntry: async (parent, { id, entry }, context, info) => {
      const user = await userModel.findById({ _id: id }).exec();
      await diaryModel.create({ user: user, diaryEntries: [{ text: entry.text, date: entry.date }] });
      return true;
    }
  }
};
