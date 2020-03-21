import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-diary'
})
export class Diary {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Diary">
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
