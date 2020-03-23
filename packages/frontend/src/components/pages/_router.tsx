import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-router'
})
export class Router implements ComponentInterface {

  render() {
    return (
      <ion-router useHash={ false }>
        <ion-route-redirect from="/"
                            to="/welcome"
        />

        <ion-route url="/login"
                   component="mapa-page-login"
        />
        <ion-route url="/profile/create"
                   component="mapa-page-profile-create"
        />
        <ion-route url="/profile/:name"
                   component="mapa-page-profile"
        />
        <ion-route url="/family/status"
                   component="mapa-page-family-status"
        />
        <ion-route url="/kids/create"
                   component="mapa-page-kids-create"
        />
        <ion-route url="/custody"
                   component="mapa-page-custody"
        />
        <ion-route url="/custody/template"
                   component="mapa-page-custody-template"
        />

        <ion-route url="/welcome"
                   component="mapa-page-welcome"
        />
        <ion-route url="/dashboard"
                   component="mapa-page-dashboard"
        />
        <ion-route url="/explore"
                   component="mapa-page-explore"
        />

        <ion-route url="/calendar"
                   component="mapa-page-calendar"
        />
        <ion-route url="/diary"
                   component="mapa-page-diary"
        />
        <ion-route url="/documents"
                   component="mapa-page-documents"
        />
        <ion-route url="/mediation"
                   component="mapa-page-mediation"
        />
      </ion-router>
    );
  }
}
