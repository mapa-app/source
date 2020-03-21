import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-welcome'
})
export class Welcome {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Hi there!">
          <mapa-icon-logo/>
        </mapa-header>

        <p>
          Welcome to MaPa - your family assistant.
        </p>

        <ion-button href="/profile/create"
                    color="primary"
                    expand="block"
        >
          Let's start
        </ion-button>
        <ion-button href="/profile/create"
                    color="secondary"
                    expand="block"
        >
          Accept invitation
        </ion-button>
        <ion-button href="/profile/create"
                    color="tertiary"
                    expand="block"
        >
          I already have an account
        </ion-button>
      </ion-content>
    );
  }
}
