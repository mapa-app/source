import {  Family } from '@mapa/backend';
import { query } from '../utils/query.utils';


export async function family(name:String): Promise<Family | false> {
  try {
    const result = await query(`
      query {
        family(name: "${ name }") {
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
