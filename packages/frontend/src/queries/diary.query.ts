import { Parent ,DiaryEntry, Child} from '@mapa/backend';
import { query } from '../utils/query.utils';

export async function diary(userID: Parent['id'] | Child['id']): Promise<[DiaryEntry] | false> {
  try {
    const result = await query(`
      query {
        diary(userID: "${ userID }") {
          diaryEntries{
              text
              date
              image
              children
              parents
          }
        }
      }
    `);
    console.log(result);
    return Promise.resolve(result as [DiaryEntry]);
  } catch (error) {
    return Promise.resolve(false);
  }
}
