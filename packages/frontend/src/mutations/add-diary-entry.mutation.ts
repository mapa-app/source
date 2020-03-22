import {  DiaryEntry } from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function addDiaryEntry(userID: String, entry: DiaryEntry): Promise<Boolean | false> {
  try {
    const result = await query(`
      mutation {
        addFamilyMember(userID: "${ userID }", entry: "${ entry }") 
      }
    `);
    console.log(result);
    return Promise.resolve(result as Boolean);
  } catch (error) {
    return Promise.resolve(false);
  }
}