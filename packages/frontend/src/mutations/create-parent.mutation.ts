import { Parent } from '@mapa/backend';
import { mutation } from '../utils/graphql.utils';
import { storeMe } from '../utils/auth.utils';

export async function createParent(name: Parent['name'], pass: Parent['password'], color: string): Promise<Parent | false> {
  try {
    const parent = await mutation<Parent>(`
      createParent(name: "${ name }", password: "${ pass }", color: "${ color }") {
        id name color
      }
    `);
    await storeMe(parent);
    return parent;
  } catch (error) {
    return false;
  }
}
