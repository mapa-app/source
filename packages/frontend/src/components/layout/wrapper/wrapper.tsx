import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-wrapper',
  styleUrl: 'wrapper.scss',
  shadow: true
})
export class Wrapper implements ComponentInterface {

  render() {
    return (
      <slot/>
    );
  }

}
