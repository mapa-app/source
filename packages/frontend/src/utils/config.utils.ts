let config: Config;

const queue: Set<(config: Config) => void> = new Set();

export async function getConfig(): Promise<Config> {
  if (config === undefined) {
    return new Promise<Config>(resolve => queue.add(resolve));
  }
  return config;
}

export async function loadConfig(url: string) {
  const data = await fetch(url);
  config = await data.json() as Config;
  queue.forEach(resolve => resolve(config));
}
