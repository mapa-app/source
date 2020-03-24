import { ParentModel } from '../models/parent.model';

export const parentResolver = {
  Query: {
    login: async (parent, { name, password }) => {
      return await ParentModel
        .findOne({ name, password })
        .exec();
    }
  },
  Mutation: {
    createParent: async (parent, { name, password, color }) => {
      return await ParentModel.create({ name, password, color });
    }
  }
};
