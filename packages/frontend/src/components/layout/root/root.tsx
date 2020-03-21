import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-root',
  styleUrl: 'root.scss'
})
export class Root {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="mapa-home" />
          <ion-route url="/profile/:name" component="mapa-profile" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
