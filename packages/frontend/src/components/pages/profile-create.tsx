import { Component, ComponentInterface, h, State } from '@stencil/core';

import { register } from '../../queries/register.query';
import { openURL } from '../../utils/router.utils';

@Component({
  tag: 'mapa-page-profile-create'
})
export class ProfileCreate implements ComponentInterface {

  @State()
  hasError = false;

  @State()
  username = '';

  @State()
  password = '';

  @State()
  color = '';

  get disabled(): boolean {
    return this.username === ''
      || this.password === ''
      || this.color === '';
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

    this.hasError = !await register(this.username, this.password, this.color);
    if (!this.hasError) {
      await openURL('/family/status', event, 'forward');
    }
  }

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Erstelle dein Profil">
          <mapa-icon-idea style={ { color: 'var(--color-orange)' } }/>
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
                         name="username"
                         value={ this.username }
                         color={ this.hasError && 'danger' }
                         onInput={ event => this.handleChange(event) }
              />
            </ion-item>

            <ion-item>
              <ion-label position="floating"
                         color={ this.hasError && 'danger' }
              >
                Passwort
              </ion-label>
              <ion-input type="password"
                         name="password"
                         value={ this.password }
                         color={ this.hasError && 'danger' }
                         onInput={ event => this.handleChange(event) }
              />
            </ion-item>

            <mapa-color-picker onColored={ ({ detail }) => this.color = detail }/>

            <ion-button type="submit"
                        color="primary"
                        expand="block"
                        disabled={ this.hasError || this.disabled }
            >
              Anlegen
            </ion-button>
          </form>
        </mapa-main>
      </ion-content>
    );
  }
}
