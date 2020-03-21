import { Component, h } from '@stencil/core';

@Component({
  tag: 'mapa-router'
})
export class Router {

  render() {
    return [
      <ion-router useHash={ false }>
        <ion-route-redirect from="/"
                            to="mapa-welcome"
        />

        <ion-route url="/profile/create"
                   component="mapa-profile-create"
        />
        <ion-route url="/profile/:name"
                   component="mapa-profile"
        />
        <ion-route url="/family/status"
                   component="mapa-family-status"
        />
        <ion-route url="/kid/create"
                   component="mapa-kids-create"
        />

        <ion-route url="/welcome"
                   component="mapa-welcome"
        />
        <ion-route url="/dashboard"
                   component="mapa-dashboard"
        />
        <ion-route url="/explore"
                   component="mapa-explore"
        />

        <ion-route url="/calendar"
                   component="mapa-calendar"
        />
        <ion-route url="/diary"
                   component="mapa-diary"
        />
        <ion-route url="/documents"
                   component="mapa-documents"
        />
        <ion-route url="/mediation"
                   component="mapa-mediation"
        />
      </ion-router>,
      <ion-nav/>
    ];
  }
}
