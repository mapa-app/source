declare interface Config {
  urls: {
    api: string;
    assets: string;
  };
  console: Partial<{
    log: boolean;
    info: boolean;
    warn: boolean;
    error: boolean;
  }>;
  defaults: {
    locale: string;
  };
}
