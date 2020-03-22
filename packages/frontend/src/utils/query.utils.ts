import { getConfig } from './config.utils';

export async function query<T>(query: string): Promise<T> {
  const { urls: { api } } = await getConfig();
  const response = await fetch(api, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  return await response.json() as T;
}
