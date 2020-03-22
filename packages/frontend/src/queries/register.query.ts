import { Parent } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function register(name: Parent['name'], pass: Parent['password'], color: string): Promise<Parent | false> {
  try {
    const response = await query<Parent | false>(`
      mutation {
        createParent(name: "${ name }", password: "${ pass }", color: "${ color }") {
          id, name, color
        }
      }
    `);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(false);
  }
}
