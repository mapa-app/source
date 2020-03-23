import { Parent } from '@mapa/backend';

let me: Parent;

const queue: Set<(me: Parent) => void> = new Set();

export async function getMe(): Promise<Parent> {
  if (me === undefined) {
    return new Promise<Parent>(resolve => queue.add(resolve));
  }
  return me;
}

export async function storeMe(newMe: Parent) {
  me = newMe;
  queue.forEach(resolve => resolve(me));
}
