import { childModel,instanceOfChild } from '../models/child.model';
import { parentModel } from '../models/parent.model';
import { familyModel,Family } from '../models/family.model'

export const userResolver = {
  Query: {
    login: async (parent, { name,password }, context, info) => {
      const user = await resolveUserByNameAndPassword(name,password)
      console.log(user)
      return user;
    },
    myFamily:async (parent, { id }, context, info) => {
      const user = await resolveUser(id)
      var family: Family = null
      if (instanceOfChild(user)) {
        family = await familyModel.findOne({ children: user })
      } else {
        family = await familyModel.findOne({ parents: user })
      }
      return family;
    }
  }
};

async function resolveUserByNameAndPassword(name:String,password:String){
  const child = await childModel.findOne({ name: name,password:password })
  const parent = await parentModel.findOne({ name: name,password:password });
  return child == null ? parent:child
}

async function resolveUser(id:String){
  const child = await childModel.findById({ _id: id }).exec();
  const parent = await parentModel.findById({_id: id }).exec();
  return child == null ? parent:child
}

export { resolveUser as resolveUser }
export { resolveUserByNameAndPassword as resolveUserByNameAndPassword }