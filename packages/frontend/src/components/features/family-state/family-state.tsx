import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'mapa-family-state',
  styleUrl: 'family-state.scss',
  shadow: true
})
export class FamilyState implements ComponentInterface {

  @Prop()
  active = false;

  @Prop()
  status: 'together' | 'divorced' | 'patched' | 'single';

  render() {
    return (
      <Host class={ { active: this.active } }>
        <mapa-icon-family class="icon"
                          status={ this.status }
        />
        <span class="label">
          <slot/>
        </span>
      </Host>
    );
  }

}
