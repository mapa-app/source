import { childModel,instanceOfChild } from '../models/child.model';
import { parentModel,Parent } from '../models/parent.model';
import { familyModel,Family } from '../models/family.model'

export const userResolver = {
  Query: {
    login: async (parent, { name,password }, context, info) => {
      const user = await resolveUserByNameAndPassword(name,password)
      return user as Parent;
    },
    myFamily:async (parent, { id }, context, info) => {
      const user = await resolveUser(id)
      var family: Family = null
      if (instanceOfChild(user)) {
        family = await familyModel.findOne({ children: user.id })
      } else {
        family = await familyModel.findOne({ parents: user.id })
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
  console.log(child)
  return child == null ? parent:child
}

export { resolveUser as resolveUser }
export { resolveUserByNameAndPassword as resolveUserByNameAndPassword }