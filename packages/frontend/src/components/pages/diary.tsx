import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-diary'
})
export class Diary {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-logo/>

        <h1>Diary</h1>

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
