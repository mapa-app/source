import { User } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function login(name: User['name'], pass: User['password']): Promise<boolean> {
  try {
    const { login } = await query(`
      query {
        login(name: "${ name }", password: "${ pass }")
      }
    `);
    return Promise.resolve(login);
  } catch (error) {
    return Promise.resolve(false);
  }
}
