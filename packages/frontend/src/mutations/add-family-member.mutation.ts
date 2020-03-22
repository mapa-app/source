import {  Family } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function addFamilyMember(userID: String, familyID: String): Promise<Family | false> {
  try {
    const result = await query(`
      mutation {
        addFamilyMember(userID: "${ userID }", familyID: "${ familyID }") {
          id
          name
          state
        }
      }
    `);
    console.log(result);
    return Promise.resolve(result as Family);
  } catch (error) {
    return Promise.resolve(false);
  }
}