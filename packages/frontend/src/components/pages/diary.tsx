import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-page-diary'
})
export class Diary implements ComponentInterface {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Diary">
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
