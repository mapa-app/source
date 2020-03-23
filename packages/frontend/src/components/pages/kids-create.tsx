import { Component, ComponentInterface, h, Listen, State } from '@stencil/core';
import { createChild } from '../../mutations/create-child.mutation';
import { openURL } from '../../utils/router.utils';

@Component({
  tag: 'mapa-page-kids-create'
})
export class KidsCreate implements ComponentInterface {

  @State()
  hasError = false;

  @State()
  name = '';

  @State()
  birthday = '';

  @State()
  color = '';

  @State()
  gender: 'FEMALE' | 'MALE';

  get disabled(): boolean {
    return this.name === ''
      || this.birthday === ''
      || this.color === ''
      || this.gender === undefined;
  }

  async handleChange(event: Event) {
    const { name, value } = event.target as HTMLInputElement;
    if (name in this) {
      this[name] = value;
      this.hasError = false;
    }
  }

  async handleSubmit(event: Event) {
    event.preventDefault();

    this.hasError = !await createChild(this.name, new Date(this.birthday), this.color, this.gender);
    if (!this.hasError) {
      await openURL('/dashboard', event, 'forward');
    }
  }

  @Listen('keydown')
  async handleEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      await this.handleSubmit(event);
    }
  }

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-wrapper>
          <mapa-header headline="Erstelle das Profil deines Kindes">
            <mapa-icon-kite style={ { color: 'var(--color-orange)' } }/>
          </mapa-header>

          <mapa-main>
            <form onSubmit={ event => this.handleSubmit(event) }>
              <ion-item>
                <ion-label position="floating"
                           color={ this.hasError && 'danger' }
                >
                  Name
                </ion-label>
                <ion-input type="text"
                           name="name"
                           value={ this.name }
                           color={ this.hasError && 'danger' }
                           onInput={ event => this.handleChange(event) }
                />
              </ion-item>

              <ion-item>
                <ion-label position="floating"
                           color={ this.hasError && 'danger' }
                >
                  Geburtstag
                </ion-label>
                <ion-datetime value="1990-02-19"
                              name="birthday"
                              color={ this.hasError && 'danger' }
                              onIonChange={ event => this.handleChange(event) }
                />
              </ion-item>

              <mapa-gender-select onGendered={ ({ detail }) => this.gender = detail }/>

              <mapa-color-picker onColored={ ({ detail }) => this.color = detail }/>

              <ion-button type="submit"
                          color="primary"
                          expand="block"
                          disabled={ this.hasError || this.disabled }
              >
                Speichern
              </ion-button>
            </form>
          </mapa-main>
        </mapa-wrapper>
      </ion-content>
    );
  }
}
