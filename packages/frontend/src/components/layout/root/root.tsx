import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-root'
})
export class Root {

  render() {
    return (
      <mapa-router/>
    );
  }
}
