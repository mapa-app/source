import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-mediation'
})
export class Mediation implements ComponentInterface {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Mediation">
          <mapa-icon-logo/>
        </mapa-header>

        <mapa-main>
          <ion-button href="/explore"
                      color="primary"
                      expand="block"
                      routerDirection="back"
          >
            Explore MaPa
          </ion-button>
        </mapa-main>
      </ion-content>
    );
  }
}
