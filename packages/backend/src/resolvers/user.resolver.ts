import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

export const userResolver = {
  Query: {
    user: async (parent, { id }, { models: { userModel }, me }, info) => {
      const user = await userModel.findById({ _id: id }).exec();
      return user;
    },
    diary: async (parent, { id }, { models: { userModel }, me }, info) => {
      const user = await userModel.findById({ _id: id }).exec();
      return null
    },
    login: async (parent, { name, password }, { models: { userModel } }, info) => {
      const user = await userModel.findOne({ name }).exec();

      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      const matchPasswords = bcrypt.compareSync(password, user.password);

      if (!matchPasswords) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = jwt.sign({ id: user.id }, 'riddlemethis', { expiresIn: 24 * 10 * 50 });

      return {
        token,
      };
    },
  },
  Mutation: {
    createUser: async (parent, { name, password,role }, { models: { userModel } }, info) => {
      const user = await userModel.create({ name, password,role });
      return user;
    },
    addDiaryEntry: async (parent, { user, entry }, { models: { userModel } }, info) => {
      console.log("add " + user)
      return true;
    }
  }
};
