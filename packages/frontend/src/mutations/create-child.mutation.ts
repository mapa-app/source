import { Child } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function createChild(name: Child['name'], birthdate: Child['birthdate'], gender: Child['gender']): Promise<Child | false> {
  try {
    const result = await query(`
      mutation {
        createChild(name: "${ name }", birthdate: "${ birthdate }", gender: ${ gender }) {
          id
          name
          birthdate
          gender
        }
      }
    `);
    console.log(result);
    return Promise.resolve(result as Child);
  } catch (error) {
    return Promise.resolve(false);
  }
}
