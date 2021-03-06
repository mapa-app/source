import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-page-explore'
})
export class Explore implements ComponentInterface {

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-wrapper>
          <mapa-header headline="Explore MaPa">
            <mapa-icon-logo/>
          </mapa-header>

          <mapa-main>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-button href="/calendar"
                              color="primary"
                              expand="block"
                  >
                    Calendar
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button href="/diary"
                              color="primary"
                              expand="block"
                  >
                    Diary
                  </ion-button>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <ion-button href="/documents"
                              color="primary"
                              expand="block"
                  >
                    Documents
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button href="/mediation"
                              color="primary"
                              expand="block"
                  >
                    Mediation
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </mapa-main>
        </mapa-wrapper>
      </ion-content>
    );
  }
}
