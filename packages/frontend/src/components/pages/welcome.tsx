import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-page-welcome'
})
export class Welcome implements ComponentInterface {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center use-gradient">
        <mapa-header headline="Hallo!">
          <mapa-icon-logo/>
        </mapa-header>

        <mapa-main>
          <p>
            Willkommen bei MaPa, dein Familien-Helfer.
          </p>

          <ion-button href="/profile/create"
                      color="primary"
                      expand="block"
          >
            Lass uns starten
          </ion-button>
          <ion-button color="secondary"
                      expand="block"
          >
            Einladung annehmen
          </ion-button>
          <ion-button href="/login"
                      fill="clear"
                      color="secondary"
                      expand="block"
          >
            LOG IN
          </ion-button>
        </mapa-main>
      </ion-content>
    );
  }
}
