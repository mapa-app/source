import { Component, ComponentInterface, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'mapa-page-profile'
})
export class Profile implements ComponentInterface {

  @State() state = false;

  @Prop() name: string;

  formattedName(): string {
    if (this.name) {
      return this.name.substr(0, 1)
        .toUpperCase() + this.name.substr(1)
        .toLowerCase();
    }
    return '';
  }

  render() {
    return (
      <ion-content class="ion-padding">
        <p>
          Hi! My name is { this.formattedName() }. My name was passed in through a
          route param!
        </p>

        <ion-item>
          <ion-label>Setting ({ this.state.toString() })</ion-label>
          <ion-toggle
            checked={ this.state }
            onIonChange={ ev => (this.state = ev.detail.checked) }
          />
        </ion-item>
      </ion-content>
    );
  }
}
