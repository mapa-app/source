import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-page-custody'
})
export class Custody implements ComponentInterface {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-wrapper>
          <mapa-header headline="Sorgerecht">
            <mapa-icon-custody style={ { color: 'var(--color-orange)' } }/>
          </mapa-header>

          <mapa-main>
            <ion-button href="/custody-template"
                        color="primary"
                        expand="block"
            >
              Wir können helfen
            </ion-button>
          </mapa-main>
        </mapa-wrapper>
      </ion-content>
    );
  }
}
