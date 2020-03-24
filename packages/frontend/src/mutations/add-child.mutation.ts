import { mutation } from '../utils/graphql.utils';

export async function addChild(familyId: string, childId: string): Promise<boolean> {
  try {
    return await mutation<boolean>(`
      addChild(familyID: "${ familyId }", childID: "${ childId }")
    `);
  } catch (error) {
    return false;
  }
}
