import { childModel } from '../models/child.model';

export const childResolver = {
Mutation: {
    createChild: async (parent, { name, password, color,birthdate,gender,image }, context, info) => {
        const user = await childModel.create({ name, password,color,birthdate,gender,image });
        return user;
      }

    }
  
};