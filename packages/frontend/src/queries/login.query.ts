import { Parent } from '@mapa/backend';
import { query } from '../utils/graphql.utils';
import { storeMe } from '../utils/auth.utils';

export async function login(name: Parent['name'], pass: Parent['password']): Promise<Parent | false> {
  try {
    const parent = await query<Parent>(`
      login(name: "${ name }", password: "${ pass }") {
        id name color
      }
    `);
    await storeMe(parent);
    return parent;
  } catch (error) {
    return false;
  }
}
