import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import { userModel } from '../models/user.model';
import { diaryModel } from '../models/diary.model';
import { roleModel } from '../models/role.model';
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
      const diary = await diaryModel.findOne({ user:cuser });
      return diary
    }
  },
  Mutation: {
    createUser: async (parent, { name, password,role },context, info) => {
      const user = await userModel.create({ name, password,role });
      return user;
    },
    addDiaryEntry: async (parent, { id, entry }, context, info) => {
      const user = await userModel.findById({ _id: id }).exec();
      await diaryModel.create({user:user,diaryEntries:[{text:entry.text, date:entry.date}]});
      return true;
    }
  }
};
