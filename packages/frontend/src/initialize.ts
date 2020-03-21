import '@ionic/core';
import { loadConfig } from './utils/config.utils';

export default async () => {
  // fetch config first
  await loadConfig('/config.json');
};
