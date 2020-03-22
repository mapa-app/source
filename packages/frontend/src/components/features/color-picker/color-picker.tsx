import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'mapa-color-picker',
  styleUrl: 'color-picker.scss',
  shadow: true
})
export class ColorPicker implements ComponentInterface {

  @Prop()
  colors: string[] = [
    '#ed1c24',
    '#ff9811',
    '#48cfad',
    '#f98c96',
    '#0f9af0',
    '#d6df58',
    '#8a87e0',
    '#ff3b76',
    '#666666',
    '#c4c4c4'
  ];

  @Prop({ mutable: true })
  selected?: string;

  @Event()
  colored: EventEmitter<string>;

  handleChange(select: string) {
    if (this.selected === select) {
      return;
    }

    this.selected = select;
    this.colored.emit(this.selected);
  }

  render() {
    return this.colors.map(color => (
      <div class={ {
        color: true,
        active: this.selected === color
      } }
           style={ { '--color-code': color } }
           onClick={ () => this.handleChange(color) }
      />
    ));
  }

}
