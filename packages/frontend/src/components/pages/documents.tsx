import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-documents'
})
export class Documents {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-logo/>

        <h1>Documents</h1>

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
