import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-page-documents'
})
export class Documents implements ComponentInterface {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-wrapper>
          <mapa-header headline="Documents">
            <mapa-icon-logo/>
          </mapa-header>

          <mapa-main>
            <ion-button href="/explore"
                        color="primary"
                        expand="block"
                        routerDirection="back"
            >
              Explore MaPa
            </ion-button>
          </mapa-main>
        </mapa-wrapper>
      </ion-content>
    );
  }
}
