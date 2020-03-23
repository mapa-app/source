import { Parent } from '@mapa/backend';
import { query } from '../utils/query.utils';
import { storeMe } from '../utils/auth.utils';

export async function createParent(name: Parent['name'], pass: Parent['password'], color: string): Promise<Parent | false> {
  try {
    const { createParent: me } = await query(`
      mutation {
        createParent(name: "${ name }", password: "${ pass }", color: "${ color }") {
          id, name, color
        }
      }
    `);
    await storeMe(me);
    return Promise.resolve(me as Parent);
  } catch (error) {
    return Promise.resolve(false);
  }
}
