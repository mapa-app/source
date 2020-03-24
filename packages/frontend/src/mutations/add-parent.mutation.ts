import { mutation } from '../utils/graphql.utils';

export async function addParent(familyId: string, parentId: string): Promise<boolean> {
  try {
    return await mutation<boolean>(`
      addParent(familyID: "${ familyId }", parentID: "${ parentId }")
    `);
  } catch (error) {
    return false;
  }
}
