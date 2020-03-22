import { getConfig } from './config.utils';

interface GraphQLResponse<T> {
  data: T | null;
  errors?: Error[];
}

export async function query<T>(query: string): Promise<T> {
  try {
    const { urls: { api } } = await getConfig();
    const response = await fetch(api, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    if (response.status > 200) {
      return Promise.reject(response.statusText);
    }
    const { data, errors } = await response.json() as GraphQLResponse<T>;
    if (errors && errors.length > 0) {
      const messages = errors
        .map(error => error.message)
        .join('\n');
      return Promise.reject(messages);
    }
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
