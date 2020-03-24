import { Types } from 'mongoose';
import { FamilyModel } from '../models/family.model';
import { DiaryEntryModel } from '../models/diary-entry.model';

export const familyResolver = {
  Query: {
    familyOfParent: async (parent, { parentID }) => {
      return await FamilyModel
        .findOne({ parents: Types.ObjectId(parentID) })
        .exec();
    },
    familyOfChild: async (parent, { childID }) => {
      return await FamilyModel
        .findOne({ children: childID })
        .exec();
    }
  },
  Mutation: {
    createFamily: async (parent, { name, state }) => {
      return await FamilyModel.create({ name, state, parents: [], children: [], diary: [] });
    },
    addChild: async (parent, { familyID, childID }) => {
      const family = await FamilyModel
        .findById({ _id: familyID })
        .exec();
      if (family === null) {
        return false;
      }
      if (!family.children.includes(childID)) {
        family.children.push(childID);
      }
      await family.save();
      return true;
    },
    addParent: async (parent, { familyID, parentID }) => {
      const family = await FamilyModel
        .findById({ _id: familyID })
        .exec();
      if (family === null) {
        return false;
      }
      if (!family.parents.includes(parentID)) {
        family.parents.push(parentID);
      }
      await family.save();
      return true;
    },
    addDiaryEntry: async (parent, { familyID, entry }) => {
      const family = await FamilyModel
        .findById({ _id: familyID })
        .exec();
      if (family === null) {
        return false;
      }
      const { _id } = await DiaryEntryModel.create(entry);
      family.diary.push(_id);
      await family.save();
      return true;
    }
  }
};
