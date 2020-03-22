import { Component, ComponentInterface, Element, h } from '@stencil/core';

@Component({
  tag: 'mapa-diary',
  styleUrl: 'diary.scss',
  shadow: true
})
export class Diary implements ComponentInterface {

  @Element()
  private readonly _elementRef: HTMLMapaDiaryElement;

  componentDidLoad() {
    this._elementRef.shadowRoot
      .querySelector('slot')
      .assignedElements()
      .forEach((entry, index) => {
        (entry as HTMLElement).style.setProperty('--diary-entry-index', index.toString());
      });
  }

  render() {
    return (
      <slot/>
    );
  }

}
