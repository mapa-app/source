import { User } from '@mapa/backend';
import { query } from '../utils/query.utils';

export const login = async (_name: User['name'], _pass: User['password']) => await query(`
  query {
  user(id: "5e76a190a9aad042d1bde165") {
    name
  }
}
`);
