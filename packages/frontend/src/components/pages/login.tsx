import { Component, ComponentInterface, h, State } from '@stencil/core';
import { login } from '../../queries/login.query';

@Component({
  tag: 'mapa-login'
})
export class Login implements ComponentInterface {

  @State()
  username = '';

  @State()
  password = '';

  get disabled(): boolean {
    return this.username == '' || this.password == '';
  }

  async handleChange(event: Event) {
    const { name, value } = event.target as HTMLInputElement;
    if (name in this) {
      this[name] = value;
    }
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
    await this.login();
  }

  async login() {
    await login(this.username, this.password);
  }

  render() {
    return (
      <ion-content class="ion-padding ion-text-center">
        <mapa-header headline="Login">
          <mapa-icon-logo/>
        </mapa-header>

        <mapa-main>
          <pre>{ this.username }</pre>
          <pre>{ this.password }</pre>
          <form onSubmit={ event => this.handleSubmit(event) }>
            <ion-item>
              <ion-label position="floating">Username</ion-label>
              <ion-input type="text"
                         name="username"
                         value={ this.username }
                         onInput={ event => this.handleChange(event) }
              />
            </ion-item>

            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password"
                         name="password"
                         value={ this.password }
                         onInput={ event => this.handleChange(event) }
              />
            </ion-item>

            <ion-button type="submit"
                        color="primary"
                        expand="block"
                        disabled={ this.disabled }
            >
              Login
            </ion-button>
          </form>
        </mapa-main>
      </ion-content>
    );
  }
}
