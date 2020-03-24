import { getConfig } from './config.utils';

interface GraphQLResponse<T> {
  data: {
    result: T | null
  } | null;
  errors?: Error[];
}

export async function query<T>(query: string, operation: 'query' | 'mutation' = 'query'): Promise<T | null> {
  try {
    const { urls: { api } } = await getConfig();
    const response = await fetch(api, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `${ operation } { result: ${ query } }` })
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
    if (data.result === null) {
      return Promise.reject(null);
    }
    return data.result;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function mutation<T>(mutation: string): Promise<T> {
  return query<T>(mutation, 'mutation');
}
