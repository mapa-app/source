import { userModel } from '../models/user.model';
import { familyModel, Family } from '../models/family.model';


export const familyResolver = {
    Query: {
        family: async (parent, { name }, context, info) => {
            const family = await familyModel.findOne({ name:name  }).exec();
            return family
          }
    },
    Mutation: {
        addMember: async (parent, { id,family }, context, info) => {
            const cfamily:Family  = await familyModel.findOne({ name: family.name });
            const user = await userModel.findById({ _id: id }).exec();
            if (cfamily == null) {
                const createdFamily = await familyModel.create({ name: family.name,members:[user] });
                return createdFamily
            }else{
                cfamily.members.push(user);
                cfamily.save();
            }
            return cfamily
          },
          createFamily: async (parent, { name }, context, info) => {
            const family:Family  = await familyModel.create({ name: name,members:[] })
            return family
          }
    }
}