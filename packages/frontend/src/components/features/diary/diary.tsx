import { Component, ComponentInterface, Element, h, Host, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'mapa-diary',
  styleUrl: 'diary.scss',
  shadow: true
})
export class Diary implements ComponentInterface {

  @Element()
  private readonly _elementRef: HTMLMapaDiaryElement;

  @State()
  entries: HTMLMapaDiaryEntryElement[] = [];

  @Prop()
  hasActive = false;

  @Watch('entries')
  @Watch('hasActive')
  async setIndices() {
    this.entries.forEach((entry, index) => {
      (entry as HTMLElement).style.setProperty('--diary-entry-index', index.toString());
    });
  }

  componentDidLoad() {
    this.entries = this._elementRef.shadowRoot
      .querySelector('slot')
      .assignedElements()
      .filter(({ tagName }) => tagName.toLowerCase() === 'mapa-diary-entry') as HTMLMapaDiaryEntryElement[];
  }

  render() {
    return (
      <Host class={ { 'has-active': this.hasActive } }>
        <slot/>
      </Host>
    );
  }

}
