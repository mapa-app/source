
import { familyModel, Family } from '../models/family.model';
import { resolveUser } from './user.resolver';
import { instanceOfChild } from '../models/child.model'

export const familyResolver = {
    Query: {
        family: async (parent, { name }, context, info) => {
            const family = await familyModel.findOne({ name:name  }).exec();
            return family
          }
    },
    Mutation: {
        addFamilyMember: async (parent, { userID,familyID }, context, info) => {
            const family:Family  = await familyModel.findById({ _id: familyID });
            const user = await resolveUser(userID)
            if (family == null) {
                const createdFamily = await familyModel.create({ name: family.name,members:[user] });
                return createdFamily
            }else{
                if (instanceOfChild(user)){
                    family.children.push(user.id);
                  }else{
                    family.parents.push(user.id);
                  }
                family.save();
            }
            return family
          },
          createFamily: async (parent, { name,state }, context, info) => {
            const family:Family  = await familyModel.create({ name: name,state:state,members:[] })
            return family
          }
    }
}