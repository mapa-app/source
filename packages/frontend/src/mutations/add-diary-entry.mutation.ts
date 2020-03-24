import { Family } from '@mapa/backend';
import { mutation } from '../utils/graphql.utils';

export async function addDiaryEntry(familyId: string, entry: Family['diary'][]): Promise<boolean> {
  try {
    return await mutation<boolean>(`
      addDiaryEntry(familyID: "${ familyId }", entry: ${ JSON.stringify(entry) })
    `);
  } catch (error) {
    return false;
  }
}
