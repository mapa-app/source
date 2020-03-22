
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
        addMember: async (parent, { id,name }, context, info) => {
            const cfamily:Family  = await familyModel.findOne({ name: name });
            const user = await resolveUser(id)
            if (cfamily == null) {
                const createdFamily = await familyModel.create({ name: name,members:[user] });
                return createdFamily
            }else{
                if (instanceOfChild(user)){
                    cfamily.children.push(user);
                  }else{
                    cfamily.parents.push(user);
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