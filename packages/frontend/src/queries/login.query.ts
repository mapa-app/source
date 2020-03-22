import { User } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function login(name: User['name'], pass: User['password']): Promise<boolean> {
  try {
    await query(`
      query {
        login(name: "${ name }", password: "${ pass }")
      }
    `);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.resolve(false);
  }
}
