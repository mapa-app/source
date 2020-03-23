import { Parent } from '@mapa/backend';
import { query } from '../utils/query.utils';
import { storeMe } from '../utils/auth.utils';

export async function login(name: Parent['name'], pass: Parent['password']): Promise<Parent | false> {
  try {
    const { login: me } = await query(`
      query {
        login(name: "${ name }", password: "${ pass }") {
          id
          name
          color
        }
      }
    `);
    await storeMe(me);
    return Promise.resolve(me as Parent);
  } catch (error) {
    return Promise.resolve(false);
  }
}
