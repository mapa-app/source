import { Child } from '@mapa/backend';
import { mutation } from '../utils/graphql.utils';

export async function createChild(name: Child['name'], birthdate: Child['birthdate'], color: Child['color'], gender: Child['gender']): Promise<Child | false> {
  try {
    return await mutation<Child>(`
      createChild(name: "${ name }", birthdate: "${ birthdate }", color: "${ color }", gender: ${ gender }) {
        id, name, birthdate, gender
      }
    `);
  } catch (error) {
    return false;
  }
}
