import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-documents'
})
export class Documents {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Documents">
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
