import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-family-status'
})
export class FamilyStatus {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Your family status">
          <mapa-icon-logo/>
        </mapa-header>

        <ion-button>
          Together
        </ion-button>
        <ion-button>
          Separated
        </ion-button>
        <ion-button>
          Patched
        </ion-button>
        <ion-button>
          Single
        </ion-button>

        <ion-button href="/kid/create"
                    color="primary"
                    expand="block"
        >
          next
        </ion-button>
      </ion-content>
    );
  }
}
