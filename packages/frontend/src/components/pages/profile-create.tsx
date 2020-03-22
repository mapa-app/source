import { Component, ComponentInterface, h, State } from '@stencil/core';
import { Role } from '@mapa/backend';
import { register } from '../../queries/register.query';

@Component({
  tag: 'mapa-profile-create'
})
export class ProfileCreate implements ComponentInterface {

  @State()
  hasError = false;

  @State()
  username = '';

  @State()
  password = '';

  @State()
  role: Exclude<Role['type'], 'child'> = 'mum';

  @State()
  color = '';

  get disabled(): boolean {
    return this.username == '' || this.password == '';
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
    await this.register();
  }

  async register() {
    this.hasError = !await register(this.username, this.password, this.role, this.color);
    if (!this.hasError) {
      history.pushState(null, null, '/family/status');
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

            <ion-grid>
              <ion-row>
                <ion-col>
                  <mapa-icon-gender gender="female"
                                    style={ { color: `var(--color-${ this.role === 'mum' ? 'blue-light' : 'orange' })` } }
                                    onClick={ () => this.role = 'mum' }
                  />
                </ion-col>
                <ion-col>
                  <mapa-icon-gender gender="male"
                                    style={ { color: `var(--color-${ this.role === 'dad' ? 'blue-light' : 'orange' })` } }
                                    onClick={ () => this.role = 'dad' }
                  />
                </ion-col>
              </ion-row>
            </ion-grid>

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
