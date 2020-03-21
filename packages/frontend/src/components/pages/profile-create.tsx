import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-profile-create'
})
export class ProfileCreate {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Create your profile">
          <mapa-icon-logo/>
        </mapa-header>

        <mapa-main>
          <ion-button href="/family/status"
                      color="primary"
                      expand="block"
          >
            <mapa-icon-notify/>
            I am a mom
          </ion-button>
          <ion-button href="/family/status"
                      color="primary"
                      expand="block"
          >
            <mapa-icon-notify/>
            I am a dad
          </ion-button>
        </mapa-main>
      </ion-content>
    );
  }
}
