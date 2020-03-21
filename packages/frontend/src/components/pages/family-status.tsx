import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-family-status'
})
export class FamilyStatus {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-icon-bulb/>

        <h1>Your family status</h1>

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
