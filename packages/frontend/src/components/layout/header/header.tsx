import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mapa-header',
  styleUrl: 'header.scss',
  shadow: true
})
export class Header implements ComponentInterface {

  @Prop()
  headline?: string;

  render() {
    return [
      <slot/>,
      <h1>{ this.headline }</h1>
    ];
  }

}
