import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-diary',
  styleUrl: 'diary.scss',
  shadow: true
})
export class Diary implements ComponentInterface {

  render() {
    return (
      <slot/>
    );
  }

}
