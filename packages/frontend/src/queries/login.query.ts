import { Parent } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function login(name: Parent['name'], pass: Parent['password']): Promise<Parent | false> {
  try {
    const result = await query(`
      query {
        login(name: "${ name }", password: "${ pass }") {
          id
          name
          color
        }
      }
    `);
    console.log(result);
    return Promise.resolve(result as Parent);
  } catch (error) {
    return Promise.resolve(false);
  }
}
