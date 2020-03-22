import { parentModel } from '../models/parent.model';

export const parentResolver = {
  Mutation: {
    createParent: async (parent, { name, password, color }) => {
      return await parentModel.create({ name, password, color });
    }
  }
};
