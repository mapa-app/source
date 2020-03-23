import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'mapa-gender-select',
  styleUrl: 'gender-select.scss',
  shadow: true
})
export class GenderSelect implements ComponentInterface {

  @Prop({ mutable: true })
  selected?: 'FEMALE' | 'MALE';

  @Event()
  gendered: EventEmitter<'FEMALE' | 'MALE'>;

  handleChange(select: 'FEMALE' | 'MALE') {
    if (this.selected === select) {
      return;
    }

    this.selected = select;
    this.gendered.emit(this.selected);
  }

  render() {
    return [
      <mapa-icon-gender gender="FEMALE"
                        class={ {
                          gender: true,
                          female: true,
                          active: this.selected === 'FEMALE'
                        } }
                        onClick={ () => this.handleChange('FEMALE') }
      />,
      <mapa-icon-gender gender="MALE"
                        class={ {
                          gender: true,
                          male: true,
                          active: this.selected === 'MALE'
                        } }
                        onClick={ () => this.handleChange('MALE') }
      />
    ];
  }

}
