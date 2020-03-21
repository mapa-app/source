import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-home',
  styleUrl: 'home.scss'
})
export class Home {

  render() {
    return [
      <ion-header>
        <mapa-logo/>
      </ion-header>,

      <ion-content class="ion-padding ion-text-center">
        <h1>Hi there!</h1>
        <p>
          Welcome to MaPa - your family assistant.
        </p>

        <ion-button href="/profile/ionic" expand="block">Let's start</ion-button>
        <ion-button href="/profile/ionic" expand="block">Accept invitation</ion-button>
        <ion-button href="/profile/ionic" expand="block">I already have an account</ion-button>
      </ion-content>
    ];
  }
}
