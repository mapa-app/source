import { childModel } from '../models/child.model';

export const childResolver = {
  Mutation: {
    createChild: async (parent, { name, birthdate, color, gender }) => {
      return await childModel.create({ name, birthdate, color, gender });
    }
  }
};
