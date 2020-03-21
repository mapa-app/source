import { getConfig } from './config.utils';

export namespace Console {

  export type Features = keyof Required<Config['console']>;

  export let enabledFeatures: { [feature in Features]: boolean; } = {
    log: true,
    info: true,
    warn: true,
    error: true
  };

  getConfig()
    .then(({ console }) =>
      Object.assign(enabledFeatures, console));

  export class GatedConsole implements Pick<typeof window.console, Features> {

    private _original: Map<Features, (typeof window.console)[Features]> = new Map();

    constructor(target: typeof window.console) {
      // store original implementations
      this._original.set('log', target.log);
      this._original.set('info', target.info);
      this._original.set('warn', target.warn);
      this._original.set('error', target.error);

      // proxy target implementations
      target.log = this.log.bind(this);
      target.info = this.info.bind(this);
      target.warn = this.warn.bind(this);
      target.error = this.error.bind(this);
    }

    log(...message: any[]) {
      if (enabledFeatures.log) {
        this._original.get('log')(...message);
      }
    }

    info(...message: any[]) {
      if (enabledFeatures.info) {
        this._original.get('info')(...message);
      }
    }

    warn(...message: any[]) {
      if (enabledFeatures.warn) {
        this._original.get('warn')(...message);
      }
    }

    error(...message: any[]) {
      if (enabledFeatures.error) {
        this._original.get('error')(...message);
      }
    }

  }
}

export const console = new Console.GatedConsole(window.console);
