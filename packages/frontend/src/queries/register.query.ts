import { User } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function register(name: User['name'], pass: User['password'], role: User['role']['type'], _color?: string): Promise<boolean> {
  try {
    await query(`
      mutation {
        createUser(name: "${ name }", password: "${ pass }", role: { type: "${ role }" }) {
          id
        }
      }
    `);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.resolve(false);
  }
}
