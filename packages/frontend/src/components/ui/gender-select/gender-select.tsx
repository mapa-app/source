import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'mapa-gender-select',
  styleUrl: 'gender-select.scss',
  shadow: true
})
export class GenderSelect implements ComponentInterface {

  @Prop({ mutable: true })
  selected?: 'female' | 'male';

  @Event()
  gendered: EventEmitter<'female' | 'male'>;

  handleChange(select: 'female' | 'male') {
    if (this.selected === select) {
      return;
    }

    this.selected = select;
    this.gendered.emit(this.selected);
  }

  render() {
    return [
      <mapa-icon-gender gender="female"
                        class={ {
                          gender: true,
                          female: true,
                          active: this.selected === 'female'
                        } }
                        onClick={ () => this.handleChange('female') }
      />,
      <mapa-icon-gender gender="male"
                        class={ {
                          gender: true,
                          male: true,
                          active: this.selected === 'male'
                        } }
                        onClick={ () => this.handleChange('male') }
      />
    ];
  }

}
