import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-page-custody-template'
})
export class CustodyTemplate implements ComponentInterface {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-wrapper>
          <mapa-header headline="Sorgerechtsvorlage">
            <mapa-icon-custody style={ { color: 'var(--color-orange)' } }/>
          </mapa-header>

          <mapa-main>
            <ion-button href="/dashboard"
                        color="primary"
                        expand="block"
            >
              Speichern
            </ion-button>
          </mapa-main>
        </mapa-wrapper>
      </ion-content>
    );
  }
}
