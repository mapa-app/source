import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-dashboard'
})
export class Dashboard {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Dashboard">
          <mapa-icon-logo/>
        </mapa-header>

        <p>
          Welcome Anna!
        </p>
        <p>
          We will help you to manage your everyday family life.
          You will have a helpful overview of Mike’s and Sara’s life.
          And if you need help, our professional team is here for you.
        </p>

        <pre>Daily tip</pre>

        <ion-button href="/explore"
                    color="primary"
                    expand="block"
        >
          Explore MaPa
        </ion-button>
      </ion-content>
    );
  }
}
