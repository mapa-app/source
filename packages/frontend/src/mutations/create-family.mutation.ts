import { Family } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function createChild(name: Family['name'],state: Family['state']): Promise<Family | false> {
  try {
    const result = await query(`
      mutation {
        creatFamily(name: "${ name }", state: "${ state }") {
          id
          name
          state
        }
      }
    `);
    console.log(result);
    return Promise.resolve(result as Family);
  } catch (error) {
    return Promise.resolve(false);
  }
}
