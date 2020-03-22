
import { parentModel } from '../models/parent.model';

export const parentResolver = {
Mutation: {
    createParent: async (parent, { name, password, color }, context, info) => {
        const user = await parentModel.create({ name, password,color });
        return user;
      }

    }
  
};