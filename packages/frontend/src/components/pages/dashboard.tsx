import { Component, ComponentInterface, h, State } from '@stencil/core';
import { Parent } from '@mapa/backend';
import { getMe } from '../../utils/auth.utils';

@Component({
  tag: 'mapa-page-dashboard'
})
export class Dashboard implements ComponentInterface {

  @State()
  me: Parent;

  async componentWillLoad() {
    this.me = await getMe();
  }

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-wrapper>
          <mapa-header headline={ `Willkommen, ${ this.me.name }` }>
          </mapa-header>

          <mapa-main>
            <pre>Deine heutigen Kalendereinträge</pre>

            <ion-button href="/explore"
                        color="primary"
                        expand="block"
            >
              Explore MaPa
            </ion-button>
          </mapa-main>
        </mapa-wrapper>
      </ion-content>
    );
  }
}
