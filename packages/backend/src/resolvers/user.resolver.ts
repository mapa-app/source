import { childModel, instanceOfChild } from '../models/child.model';
import { parentModel } from '../models/parent.model';
import { Family, familyModel } from '../models/family.model';

export const userResolver = {
  Query: {
    login: async (parent, { name, password }) => {
      return await parentModel
        .findOne({ name, password })
        .exec();
    },
    myFamily: async (parent, { id }) => {
      const user = await resolveUser(id);
      let family: Family;
      if (instanceOfChild(user)) {
        family = await familyModel
          .findOne({ children: user.id })
          .exec();
      } else {
        family = await familyModel
          .findOne({ parents: user.id })
          .exec();
      }
      return family;
    }
  }
};

export async function resolveUser(id: string) {
  const child = await childModel
    .findById({ _id: id })
    .exec();
  const parent = await parentModel
    .findById({ _id: id })
    .exec();
  return child || parent;
}
