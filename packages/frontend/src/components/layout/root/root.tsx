import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-root'
})
export class Root implements ComponentInterface {

  render() {
    return [
      <mapa-router/>,
      <ion-nav/>
    ];
  }
}
