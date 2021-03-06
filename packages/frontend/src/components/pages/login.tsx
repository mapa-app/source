import { Component, ComponentInterface, h, Listen, State } from '@stencil/core';

import { login } from '../../queries/login.query';
import { openURL } from '../../utils/router.utils';

@Component({
  tag: 'mapa-page-login'
})
export class Login implements ComponentInterface {

  @State()
  hasError = false;

  @State()
  username = '';

  @State()
  password = '';

  get disabled(): boolean {
    return this.username === ''
      || this.password === '';
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

    this.hasError = !await login(this.username, this.password);
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
          <mapa-header headline="Log in">
            <mapa-icon-logo/>
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

              <ion-button type="submit"
                          color="primary"
                          expand="block"
                          disabled={ this.hasError || this.disabled }
              >
                Log in
              </ion-button>
            </form>
          </mapa-main>
        </mapa-wrapper>
      </ion-content>
    );
  }
}
