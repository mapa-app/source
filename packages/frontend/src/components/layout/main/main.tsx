import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-main',
  styleUrl: 'main.scss',
  shadow: true
})
export class Main implements ComponentInterface {

  render() {
    return (
      <slot/>
    );
  }

}
