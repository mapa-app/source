import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-profile-create'
})
export class ProfileCreate {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-icon-bulb/>

        <h1>Create your profile</h1>

        <ion-button href="/family/status"
                    color="primary"
                    expand="block"
        >
          I am a mom
        </ion-button>
        <ion-button href="/family/status"
                    color="primary"
                    expand="block"
        >
          I am a dad
        </ion-button>
      </ion-content>
    );
  }
}
