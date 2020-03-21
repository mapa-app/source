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
  },
  Mutation: {
    createUser: async (parent, { name, password, role }, context, info) => {
        const user = await userModel.create({ name, password, role });
        return user;
      }

    }
  
};
