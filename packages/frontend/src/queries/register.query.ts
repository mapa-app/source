import { User } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function register(name: User['name'], pass: User['password'], color: string): Promise<User | false> {
  try {
    const response = await query<User | false>(`
      mutation {
        createUser(name: "${ name }", password: "${ pass }", color: "${ color }") {
          id, name, color
        }
      }
    `);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(false);
  }
}
