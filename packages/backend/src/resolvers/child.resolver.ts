import { ChildModel } from '../models/child.model';

export const childResolver = {
  Mutation: {
    createChild: async (parent, { name, birthdate, color, gender, image }) => {
      return await ChildModel.create({ name, birthdate, color, gender, image });
    }
  }
};
