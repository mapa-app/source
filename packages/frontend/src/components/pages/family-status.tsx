import { Component, ComponentInterface, h, State } from '@stencil/core';

@Component({
  tag: 'mapa-family-status'
})
export class FamilyStatus implements ComponentInterface {

  @State()
  status?: 'together' | 'divorced' | 'patched' | 'single';

  get disabled(): boolean {
    return this.status === undefined;
  }

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Dein Familienleben">
          <mapa-icon-home style={ { color: 'var(--color-orange)' } }/>
        </mapa-header>

        <mapa-main>
          <ion-grid>
            <ion-row>
              <ion-col>
                <mapa-family-state status="together"
                                   active={ this.status === 'together' }
                                   onClick={ () => this.status = 'together' }
                >
                  Zusammen
                </mapa-family-state>
              </ion-col>
              <ion-col>
                <mapa-family-state status="divorced"
                                   active={ this.status === 'divorced' }
                                   onClick={ () => this.status = 'divorced' }
                >
                  Getrennt
                </mapa-family-state>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <mapa-family-state status="patched"
                                   active={ this.status === 'patched' }
                                   onClick={ () => this.status = 'patched' }
                >
                  Patchwork
                </mapa-family-state>
              </ion-col>
              <ion-col>
                <mapa-family-state status="single"
                                   active={ this.status === 'single' }
                                   onClick={ () => this.status = 'single' }
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
      </ion-content>
    );
  }
}
