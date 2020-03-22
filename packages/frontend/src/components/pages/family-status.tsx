import { Component, ComponentInterface, h, State } from '@stencil/core';

@Component({
  tag: 'mapa-page-family-status'
})
export class FamilyStatus implements ComponentInterface {

  @State()
  status?: 'TOGETHER' | 'DIVORCED' | 'PATCHED' | 'SINGLE';

  get disabled(): boolean {
    return this.status === undefined;
  }

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-wrapper>
          <mapa-header headline="Dein Familienleben">
            <mapa-icon-home style={ { color: 'var(--color-orange)' } }/>
          </mapa-header>

          <mapa-main>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <mapa-family-state status="TOGETHER"
                                     active={ this.status === 'TOGETHER' }
                                     onClick={ () => this.status = 'TOGETHER' }
                  >
                    Zusammen
                  </mapa-family-state>
                </ion-col>
                <ion-col>
                  <mapa-family-state status="DIVORCED"
                                     active={ this.status === 'DIVORCED' }
                                     onClick={ () => this.status = 'DIVORCED' }
                  >
                    Getrennt
                  </mapa-family-state>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <mapa-family-state status="PATCHED"
                                     active={ this.status === 'PATCHED' }
                                     onClick={ () => this.status = 'PATCHED' }
                  >
                    Patchwork
                  </mapa-family-state>
                </ion-col>
                <ion-col>
                  <mapa-family-state status="SINGLE"
                                     active={ this.status === 'SINGLE' }
                                     onClick={ () => this.status = 'SINGLE' }
                  >
                    Allein
                  </mapa-family-state>
                </ion-col>
              </ion-row>
            </ion-grid>

            <ion-button href="/kids/create"
                        color="primary"
                        expand="block"
                        disabled={ this.disabled }
            >
              Weiter
            </ion-button>
          </mapa-main>
        </mapa-wrapper>
      </ion-content>
    );
  }
}
