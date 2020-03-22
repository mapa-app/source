
import { familyModel, Family } from '../models/family.model';
import { resolveUser } from './user.resolver';
import {childModel,Child,instanceOfChild} from '../models/child.model'
import {parentModel,Parent} from '../models/parent.model'
export const familyResolver = {
    Query: {
        family: async (parent, { name }, context, info) => {
            const family = await familyModel.findOne({ name:name  }).exec();
            return family
          }
    },
    Mutation: {
        addFamilyMember: async (parent, { userID,familyID }, context, info) => {
            const cfamily:Family  = await familyModel.findById({ _id: familyID });
            console.log(cfamily)
            const user = await resolveUser(userID)
            console.log(user)
            if (cfamily == null) {
                const createdFamily = await familyModel.create({ name: cfamily.name,members:[user] });
                return createdFamily
            }else{
                if (instanceOfChild(user)){
                    cfamily.children.push(user.id);
                  }else{
                    cfamily.parents.push(user.id);
                  }
                cfamily.save();
            }
            return cfamily
          },
          createFamily: async (parent, { name,state }, context, info) => {
            const family:Family  = await familyModel.create({ name: name,state:state,members:[] })
            return family
          }
    }
}