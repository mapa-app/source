import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mapa-diary-entry',
  styleUrl: 'diary-entry.scss',
  shadow: true
})
export class DiaryEntry implements ComponentInterface {

  @Prop()
  headline: string;

  @Prop()
  date: Date;

  @Prop()
  avatars: string[] = [];

  @Prop()
  location?: string;

  @Prop()
  image?: string;

  render() {
    return [
      <header>
        <section>
          <h2>{ this.headline }</h2>
          <time>{ this.date.toLocaleDateString() }</time>
          { this.location && (
            <address>{ this.location }</address>
          ) }
        </section>
        { this.avatars.length > 0 && (
          <aside>
            { this.avatars.map(avatar => (
              <div class="avatar"
                   style={ { '--avatar-image': `url("${ avatar }")` } }
              />
            )) }
          </aside>
        ) }
      </header>,
      <p>
        <slot/>
      </p>,
      this.image && (
        <img src={ this.image }
             alt={ this.headline }
        />
      )
    ];
  }

}
