import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-calendar'
})
export class Explore {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-logo/>

        <h1>Calendar</h1>

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
