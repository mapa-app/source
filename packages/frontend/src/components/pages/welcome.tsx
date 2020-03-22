import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-welcome'
})
export class Welcome implements ComponentInterface {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center use-gradient">
        <mapa-header headline="Hi there!">
          <mapa-icon-logo/>
        </mapa-header>

        <mapa-main>
          <p>
            Welcome to MaPa - your family assistant.
          </p>

          <ion-button href="/login"
                      color="primary"
                      expand="block"
          >
            Let's start
          </ion-button>
          <ion-button href="/login"
                      color="secondary"
                      expand="block"
          >
            Accept invitation
          </ion-button>
          <ion-button href="/login"
                      color="tertiary"
                      expand="block"
          >
            I already have an account
          </ion-button>
        </mapa-main>
      </ion-content>
    );
  }
}
