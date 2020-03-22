import { RouterDirection } from '@ionic/core';

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

// TODO: find out how to import from @ionic/core directly
// https://github.com/ionic-team/ionic/blob/c7b6c7d563dad0189c43a02444f8450216179e7b/core/src/utils/theme.ts#L36
export const openURL = async (url: string | undefined | null, ev: Event | undefined | null, direction: RouterDirection): Promise<boolean> => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction);
    }
  }
  return false;
};
