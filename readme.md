[![Netlify Status](https://api.netlify.com/api/v1/badges/1f0700e1-55c5-4d25-8546-a66bbd9861c2/deploy-status)](https://app.netlify.com/sites/mapa-app/deploys)

![MaPa App](https://github.com/mapa-app/source/raw/develop/assets/logo-mapa.png)

# MaPa App

## About
This project has been started during the [#wevsvirus hackathon](https://wirvsvirushackathon.devpost.com/) of the [German Government](https://www.bundesregierung.de/breg-de/themen/coronavirus/wir-vs-virus-1731968).

It can be found on [DevPost](https://devpost.com/software/mapa-dsnrgy), the source is on [GitHub](https://github.com/mapa-app/source) and is deployed to [Netlify](https://mapa-app.netlify.com/).

The idea is to help families with their children, especially during a crisis like Corona / Corvid-19. People are forced to stay at home, may have to work remotely and at the same time have to take care of their children. Especially divorced couples may have difficulty finding the right Blanace.

This app helps by recording the daily life of the children with a diary.\
A calendar supports the planning of childcare times.

* [Prepare](#prepare)
* [Build](#build)
* [Serve](#serve)

## Prepare
1. Use correct node version as defined in `.nvmrc`. The [node version manager](https://github.com/nvm-sh/nvm) is highly recommended.
1. Install dependencies with `npm install`
1. Copy the `.env.example` file in `packages/backend` to `.env` and enter the database credentials

## Build
Simply run `npm run build`.

## Serve
For local development run `npm start`. This creates a development server on `http://localhost:3333`
with a file watcher and live reload.

The backend is served on `http://localhost:4000/graphql`, the graphql endpoint also serves a [playground](http://localhost:4000/graphql).

To use the local backend, you have to point the api url in the config (`packages/frontend/src/config.json`) to the graphql endpoint.

![#wirvsvirus](https://github.com/mapa-app/source/raw/develop/assets/logo-wirvsvirus.png)
