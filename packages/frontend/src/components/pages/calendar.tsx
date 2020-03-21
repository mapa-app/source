import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-calendar'
})
export class Explore {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Calendar">
          <mapa-icon-logo/>
        </mapa-header>

        <ion-button href="/explore"
                    color="primary"
                    expand="block"
                    routerDirection="back"
        >
          Explore MaPa
        </ion-button>
      </ion-content>
    );
  }
}
