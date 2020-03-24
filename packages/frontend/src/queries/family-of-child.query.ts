import { Family } from '@mapa/backend';
import { query } from '../utils/graphql.utils';

export async function familyOfChild(childId: string): Promise<Family | false> {
  try {
    return await query<Family>(`
      familyOfChild(parentID: "${ childId }") {
        id state children parents diary
      }
    `);
  } catch (error) {
    return false;
  }
}
