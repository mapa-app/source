import { Family } from '@mapa/backend';
import { mutation } from '../utils/graphql.utils';

export async function createFamily(state: Family['state']): Promise<Family | false> {
  try {
    return await mutation<Family>(`
      createFamily(state: ${ state }) {
        id state children parents diary
      }
    `);
  } catch (error) {
    return false;
  }
}
