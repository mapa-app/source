import { Family } from '@mapa/backend';
import { query } from '../utils/graphql.utils';

export async function familyOfParent(parentId: string): Promise<Family | false> {
  try {
    return await query<Family>(`
      familyOfParent(parentID: "${ parentId }") {
        id state children parents diary
      }
    `);
  } catch (error) {
    return false;
  }
}
