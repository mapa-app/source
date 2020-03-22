import {  Family, Parent } from '@mapa/backend';
import { query } from '../utils/query.utils';


export async function family(userID:Parent["id"]): Promise<Family | false> {
  try {
    const result = await query(`
      query {
        myFamily(id: "${ userID }") {
          name
          children
          parents
        }
      }
    `);
    console.log(result);
    return Promise.resolve(result as Family);
  } catch (error) {
    return Promise.resolve(false);
  }
}
