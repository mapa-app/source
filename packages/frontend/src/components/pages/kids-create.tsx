import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-kids-create'
})
export class KidsCreate {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Let's make your kid's profile">
          <mapa-icon-logo/>
        </mapa-header>

        <mapa-main>
          <pre>image upload</pre>

          <ion-item>
            <ion-input type="text"
                       placeholder="name"
            />
          </ion-item>

          <ion-item>
            <ion-input type="date"
                       placeholder="Date od birth"
            />
          </ion-item>

          <ion-button href="/dashboard"
                      color="primary"
                      expand="block"
          >
            Save
          </ion-button>
        </mapa-main>
      </ion-content>
    );
  }
}
